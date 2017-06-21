/**
 * Created by Benson on 2017/6/13.
 */

const Host = 'http://192.168.0.201:8080';

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
