// const api = axios.create({
//   baseURL: 'https://77digitalmarketing.api-us1.com',
// });

// var express = require('express');
// var app = express();
 
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// }); 

// export default api;

const ActiveCampaign = require("activecampaign"); 

export const ac = new ActiveCampaign(
  "https://77digitalmarketing.api-us1.com", 
  "664dbbb7f5af474e0c6e087fafcc73927cec39c10a5c26dea2e0a8901e067c159af02892",
);
	
// TEST API credentials - infos conta 77 (completo)
ac.credentials_test().then(function(result) {
  // successful request
  if (result.success) {
    // VALID ACCOUNT
  } else {
    // INVALID ACCOUNT
  }
}, function(result) {
  // request error
});

// GET requests - infos conta 77 (resumo)
export const account_view = ac.api("account/view", {});
account_view.then(function(result) {
  // successful request
  console.log(result);
}, function(result) { 
  // request error
  console.log('deu erro 1');
});

// list 
export const list = ac.api("contact/list?listid=4&limit=500", {});
list.then(function(result) {
  // successful request
  console.log(result);
}, function(result) { 
  // request error
  console.log('deu erro 1');
});


// var contact = {
// 	email: "gui_teste@gmail.com",
// 	first_name: "gui",
// 	last_name: "ferrini",
// 	phone: "123123"
// }

// var contact_exists = ac.api("contact_add", contact);
// contact_exists.then(function(result) {
// 	// successful request
// 	console.log(result);
// }, function(result) {
// 	// request error
//   console.log('deu erro 2');
// });


// var contact_exists = ac.api("contact/view?email=17rewx@gmail.com", {});
// contact_exists.then(function(result) {
// 	// successful request
// 	console.log(result);
// }, function(result) {
// 	// request error
//   console.log('deu erro 2');
// });


// var list = {
// 	name: "List teste_Gui",
// 	sender_name: "teste_Gui",
// 	sender_addr1: "endereço1",
// 	sender_city: "cidade1",
// 	sender_zip: "010101",
// 	sender_country: "Br"
// };

// var list_add = ac.api("list/add", list);
// list_add.then(function(result) {
// 	// successful request
// 	console.log(result);
// }, function(result) {
// 	// request error
// 	console.log('deu erro List teste_Gui');
// });

export const AC_Form = {

  version: 1,
  url_base: "https://77digitalmarketing.api-us1.com",

  whitelist: ["getforms"],
};


// "account/view" - infos sobre nossa conta
// contact/view?email=17rewx@gmail.com // infos sobre um acesso via email do cliente