<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    <h1>{{ msg }}</h1>
    <!--内容开始-->
    <div class="login">
      <div class="login-wrap">
        <h3>登录</h3>
        <input type="text" placeholder="请输入用户名" v-model="telephone">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button @click="login">登录</button>
      </div>
    </div>
    <!--内容结束-->

    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="success">成功按钮</el-button>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[],
      telephone: '',
      password: '',
      msg:''
    }
  },
  mounted: function () {
    this.$http.get("/api/mine/index").then((res)=>{
      this.data=res.body;
      console.log(this.data);
    });
  },
  methods:  {
      login:function () {
        if(this.telephone==""||this.password==""){
          alert("请输入用户名或密码");
        }
        else{
          let data={"telephone":this.telephone,"password":this.password}
          //接口请求
          this.$http.post("/api/user/login",data).then((res)=>{
            this.msg=res.body.msg;
            console.log(res.body);

            if(res.body.status==1){
              alert("登录失败");
            }
            else if(res.body.status==0){
              alert("登录成功");
            }
          })
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
