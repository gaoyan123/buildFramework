<template>
    <div class="login-wrap">
        <div class="login-wrap_panel">
            <el-form :model="loginForm"
                     :ref="loginForm"
                     :rules="rules">
                <el-row>
                    <el-col :span="12">
                        <div class="bgImg"><img src="../assets/img/login.jpg" width="100%" height="100%"></div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light signIn" v-if="isSignIn">
                            <h3>登 录</h3>
                            <el-form-item prop="username">
                                 <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input placeholder="密码" v-model="loginForm.password" type="password"></el-input>
                            </el-form-item>
                            <el-button type="primary" class="w-100" @click="signIn(loginForm)">点击登录</el-button>
                            <div class="isSignUp pdt-15">
                                <span>没有账号？ </span>
                                <el-link :underline="false" type="primary" @click="backToSignUp">注 册</el-link>
                            </div>
                        </div>
                        <div class="grid-content bg-purple-light signUp" v-if="isSignUp">
                            <h3>注册</h3>
                            <el-form-item prop="username">
                                <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"></el-input>
                            </el-form-item>
                            <el-form-item prop="confirmpassword">
                                <el-input placeholder="请确认密码" type="password" v-model="loginForm.confirmpassword" ></el-input>
                            </el-form-item>
                            <el-button type="primary" class="w-100" @click="signUp(loginForm)">注册</el-button>
                            <div class="isSignUp pdt-15">
                                 <span>已有账号？ </span>
                                <el-link :underline="false" type="primary"  @click="backToSignIn">直接登录</el-link>
                            </div>
                        </div>
                     </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          var validatePass2 = function(rule, value, callback){
              if( value !== this.loginForm.password){
                  callback(new Error('两次输入密码不一致!'));
              } else{
                  callback();
              }
          }.bind(this)
          return {
              isSignIn : true,
              isSignUp : false,
              loginForm: {
                  username:'',
                  password:'',
                  confirmpassword:''
              },
              rules: {
                  username: [
                      { required: true, message: '请输入用户名', trigger: 'blur' }
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                      { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                  ],
                  confirmpassword: [
                      { validator: validatePass2, trigger: 'blur' }
                  ]
              }
          }
        },
        methods:{
            backToSignIn() {
                this.isSignUp = false;
                this.isSignIn = true;
            },
            backToSignUp() {
                this.isSignIn = false;
                this.isSignUp = true;
            },
            signIn(formName) {
                let that = this;
                this.$refs[formName].validate((val) => {
                    if(val){
                        that.$apis.login({
                            username:formName.username,
                            password:formName.password
                        }).then((data)=>{
                            if(data.status === 200){
                                if(data.data.status === 1001){
                                    alert("账户不存在")
                                }else {
                                    that.$router.push({ path: 'home' });
                                }
                            }
                        })
                    }else {
                        alert('请输入正确的账号和密码');
                    }
                });
            },
            signUp(formName) {
                let that = this;
                this.$refs[formName].validate((val) => {
                    if(val){
                        that.$apis.register({
                            username:formName.username,
                            password:formName.password
                        }).then((data)=>{
                            if(data.status === 200){
                                if(data.data.status === 1001){
                                    alert("用户已经注册")
                                }else {
                                    that.$router.push({ path: 'home' });
                                }
                            }
                        })
                    }else {
                        alert('请输入正确的账号和密码');
                    }
                });
            }
        }
    }
</script>
