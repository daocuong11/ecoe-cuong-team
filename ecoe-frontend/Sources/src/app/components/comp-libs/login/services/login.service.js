import axios from 'axios';

export const loginService = {
    login,
    getUserBySecurityPhone,
    verifyOtpForResetPassword,
    resetPasswordByToken,
    generateOtp
}


function login(data) {
    return axios.post('https://apidev.pi-city.com/userservice/api/login', data);
}

function getUserBySecurityPhone(phoneNumber) {
    return axios.get('https://apidev.pi-city.com/userservice/api/getUserBySecurityPhone', { params: { securityPhone: phoneNumber } });
}

function verifyOtpForResetPassword(ecoeUserId, otp) {
    return axios.get('https://apidev.pi-city.com/userservice/api/verifyOtpForResetPassword', {
        params: {
            ecoeUserId: ecoeUserId,
            otp: otp
        }
    });
}

function resetPasswordByToken(newPassword, token) {
    return axios.get('https://apidev.pi-city.com/userservice/api/resetPasswordByToken', {
        params: {
            newPassword: newPassword,
            token: token
        }
    });
}

function generateOtp(ecoeUserId, phone) {
    return axios({
        method: 'post',
        url: 'https://apidev.pi-city.com/userservice/api/otp/generate', 
        params: {
            ecoeUserId: ecoeUserId,
            phone: phone
        }  
    });
}