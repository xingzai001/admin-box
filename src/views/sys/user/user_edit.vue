<template>
  <div>
    <el-form :model="form"  :rules="rules" ref="userForm"  label-position="left" label-width="80px" class="demo-ruleForm">
      <div  class="container">
        <el-form-item label="用户名称" prop="userName" >
          <el-input v-model="form.userName"  placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone" >
          <el-input v-model="form.phone"  placeholder="请输入联系电话"></el-input>
        </el-form-item>

        <el-form-item label="角色" prop="role" >
          <el-select v-model="form.role" placeholder="请选择">
            <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.title"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

      </div>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="mini" @click="submitForm()">提交</el-button>
        <el-button size="mini" @click="resetForm()" :disabled="form.id!==undefined">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "user_edit",
  data(){
    return{
      form:{},
      roleList:[],
      rules:{
        userName:[{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        phone:[{ required: true, message: '手机号不能为空', trigger: 'blur' }],
        role:[{ required: true, message: '角色不能为空', trigger: 'blur' }],
      },
    }
  },
  created() {
    this.getAllRole();
  },
  methods: {
    editRow(row) {
      this.form = row;
    },
    submitForm() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          if(this.form.id!==undefined) {
            this.$api.userApi.addUser(this.form).then(res => {
              this.message(res)
            })
          }else{
            this.$api.userApi.editUser(this.form).then(res => {
              this.message(res)
            })
          }
        } else {
          return false;
        }
      });
    },

    //操作提示
    message(res){
      if (res.data.status == 200) {
        this.$message.success(res.data.message);
        this.$emit("load");
      } else {
        this.$message.error(res.data.message);
      }
    },

    resetForm() {
      this.$refs['userForm'].resetFields();
    },
    /**
     * 获取全部角色
     */
    getAllRole(){
      this.$api.roleApi.getRoleList({}).then(res=>{
        this.roleList=res.data.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/table";
</style>