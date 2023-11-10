const validEditUserPayload = {
  userName: 'updateUsername',
  password: 'updatePassword',
  name: 'updateName',
  cmnd_passport: 'updatecmnd',
  phoneNumber: 'updatePhoneNumber',
  birthday: new Date(),
  address: 'updateAddress',
  email: 'updateEmail@gmail.com',
  avatar: 'updateAvatar',
  idRole: 1,
  gender: true,
  idCart: '123',
};
const receiverInfomation = {
  name: 'Lấy đồ dùm Phan Hiển',
  address: 'Ấp Tân Ngãi, xã Tân Trung, Mỏ Cày Nam, Bến Tre ',
  phoneNumber: '03030303',
  notice: 'Nhà gần cột điện ',
};
const invalidReceiverInfomation = {
  name: 'Lấy đồ dùm Phan Hiển',
  address: 'Ấp Tân Ngãi, xã Tân Trung, Mỏ Cày Nam, Bến Tre ',
  notice: 'Nhà gần cột điện ',
};
module.exports = {
  validEditUserPayload,
  receiverInfomation,
  invalidReceiverInfomation,
};
