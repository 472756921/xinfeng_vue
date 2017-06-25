/**
 * Created by Benson on 2017/6/13.
 */

const Host = 'http://121.42.142.228:8090';

// 登录接口
export const userLogin = function () {
  const URL = '/app/api/admin/login';
  const API = Host + URL;
  return API;
};
// 获取单位列表
export const getUnitlist = function () {
  const URL = '/app/api/unit/queryAllUnit';
  const API = Host + URL;
  return API;
};
// 新增单位
export const AddUnit = function () {
  const URL = '/app/api/unit/save';
  const API = Host + URL;
  return API;
};
// 获取村医管辖用户列表
export const getDoclist = function () {
  const URL = '/app/api/customer/queryAllByUser';
  const API = Host + URL;
  return API;
};
// 获取角色身份列表
export const getAdminitlist = function () {
  const URL = '/app/api/admin/findAllAdminUser';
  const API = Host + URL;
  return API;
};
// 新增角色用户
export const addAdmin = function (type) {
  let URL = '/app/api/admin/save';
  if (type === 5) {
    URL = '/app/api/doctor/save';
  }
  const API = Host + URL;
  return API;
};
// 禁用用户
export const enAbleAdmin = function (type) {
  if (type === 'doc') {
    const URL = '/app/api/doctor/disabled';
    const API = Host + URL;
    return API;
  }
  const URL = '/app/api/admin/disabled';
  const API = Host + URL;
  return API;
};
// 启用用户
export const ableAdmin = function (type) {
  if (type === 'doc') {
    const URL = '/app/api/doctor/abled';
    const API = Host + URL;
    return API;
  }
  const URL = '/app/api/admin/abled';
  const API = Host + URL;
  return API;
};
// 重置密码
export const resetAdminPWD = function (type) {
  if (type === 'doc') {
    const URL = '/app/api/doctor/reset';
    const API = Host + URL;
    return API;
  }
  const URL = '/app/api/admin/reset';
  const API = Host + URL;
  return API;
};

export const delAdminitlist = function (type) {
  if (type === 'doc') {
    const URL = '/app/api/doctor/delete';
    const API = Host + URL;
    return API;
  }
  const URL = '/app/api/admin/delete';
  const API = Host + URL;
  return API;
};
// 查询村医列表
export const doclist = function () {
  const URL = '/app/api/doctor/findAllDoctor';
  const API = Host + URL;
  return API;
};
// 查询用户信息
export const getUserInfo = function () {
  const URL = '/app/api/customer/queryUserById';
  const API = Host + URL;
  return API;
};
// 查询儿童免疫程序表
export const getUserBaby = function () {
  const URL = '/app/api/vaccine/queryByCustomer';
  const API = Host + URL;
  return API;
};
// 查询1-8月龄儿童健康检查记录表
export const getUserBabyOE = function () {
  const URL = '/app/api/examination/queryByCustomer';
  const API = Host + URL;
  return API;
};
// 健康体检列表
export const getHealthList = function () {
  const URL = '/app/api/health/queryHealthList';
  const API = Host + URL;
  return API;
};
// 健康体检表详情
export const getHealthData = function () {
  const URL = '/app/api/health/queryHealthById';
  const API = Host + URL;
  return API;
};
// 3-6岁儿童
export const getThreeToSixChildHealthRecord = function () {
  const URL = '/app/api/threeToSixChildHealthRecord/findAllThreeToSixChildHealthRecordByCustomreId';
  const API = Host + URL;
  return API;
};
// 12-30月儿童
export const getTecondExamination = function () {
  const URL = '/app/api/secondExamination/queryByCustomer';
  const API = Host + URL;
  return API;
};
// 新生儿童
export const getNewBaby = function () {
  const URL = '/app/api/newbornHome/find';
  const API = Host + URL;
  return API;
};
// 健康教育轰动详情
export const getHE = function () {
  const URL = '/app/api/healthEducationActivityRecord/find';
  const API = Host + URL;
  return API;
};
// 健康教育轰动详情列表
export const getHEList = function () {
  const URL = '/app/api/healthEducationActivityRecord/findAllHealthEducationActivityRecord';
  const API = Host + URL;
  return API;
};
// 查询健康体检信息卡
export const getUserHealthById = function () {
  const URL = '/app/api/customer/queryUserHealthById';
  const API = Host + URL;
  return API;
};
