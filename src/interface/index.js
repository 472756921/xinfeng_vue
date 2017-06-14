/**
 * Created by Benson on 2017/6/13.
 */

const Host = 'http://192.168.0.201:8080';

export const userLogin = function () {
  const URL = '/app/api/admin/login';
  const API = Host + URL;
  return API;
};

export const getUnitlist = function () {
  const URL = '/app/api/customer/queryAllUnit';
  const API = Host + URL;
  return API;
};
export const getDoclist = function () {
  const URL = '/app/api/customer/queryAllByUser';
  const API = Host + URL;
  return API;
};

export const getAdminitlist = function () {
  const URL = '/app/api/admin/find';
  const API = Host + URL;
  return API;
};

export const delAdminitlist = function (id) {
  const URL = '/app/api/admin/delete/';
  const API = Host + URL + id;
  console.log(API);
  return API;
};

