import axios from "axios"
const bikinibodyperformAPI = axios.create({
  baseURL: "https://bikini-body-perform-48943.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return bikinibodyperformAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return bikinibodyperformAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return bikinibodyperformAPI.post(`/api/v1/signup/`, payload)
}
function modules_appointment_local_appointment_list(payload) {
  return bikinibodyperformAPI.get(`/modules/appointment-local/appointment/`)
}
function modules_appointment_local_appointment_create(payload) {
  return bikinibodyperformAPI.post(
    `/modules/appointment-local/appointment/`,
    payload
  )
}
function modules_appointment_local_appointment_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment-local/appointment/${payload.id}/`
  )
}
function modules_appointment_local_appointment_update(payload) {
  return bikinibodyperformAPI.put(
    `/modules/appointment-local/appointment/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_partial_update(payload) {
  return bikinibodyperformAPI.patch(
    `/modules/appointment-local/appointment/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_destroy(payload) {
  return bikinibodyperformAPI.delete(
    `/modules/appointment-local/appointment/${payload.id}/`
  )
}
function modules_appointment_local_appointment_session_list(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment-local/appointment_session/`
  )
}
function modules_appointment_local_appointment_session_create(payload) {
  return bikinibodyperformAPI.post(
    `/modules/appointment-local/appointment_session/`,
    payload
  )
}
function modules_appointment_local_appointment_session_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment-local/appointment_session/${payload.id}/`
  )
}
function modules_appointment_local_appointment_session_update(payload) {
  return bikinibodyperformAPI.put(
    `/modules/appointment-local/appointment_session/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_session_partial_update(payload) {
  return bikinibodyperformAPI.patch(
    `/modules/appointment-local/appointment_session/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_appointment_session_destroy(payload) {
  return bikinibodyperformAPI.delete(
    `/modules/appointment-local/appointment_session/${payload.id}/`
  )
}
function modules_appointment_local_meetings_information_list(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment-local/meetings-information/`
  )
}
function modules_appointment_local_meetings_information_create(payload) {
  return bikinibodyperformAPI.post(
    `/modules/appointment-local/meetings-information/`,
    payload
  )
}
function modules_appointment_local_meetings_information_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment-local/meetings-information/${payload.id}/`
  )
}
function modules_appointment_local_meetings_information_update(payload) {
  return bikinibodyperformAPI.put(
    `/modules/appointment-local/meetings-information/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_meetings_information_partial_update(
  payload
) {
  return bikinibodyperformAPI.patch(
    `/modules/appointment-local/meetings-information/${payload.id}/`,
    payload
  )
}
function modules_appointment_local_meetings_information_destroy(payload) {
  return bikinibodyperformAPI.delete(
    `/modules/appointment-local/meetings-information/${payload.id}/`
  )
}
function modules_appointment_service_appointment_remove_destroy(payload) {
  return bikinibodyperformAPI.delete(
    `/modules/appointment/service/${payload.id}/appointment/remove/`
  )
}
function modules_appointment_service_appointment_single_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment/service/${payload.id}/appointment/single/`
  )
}
function modules_appointment_service_appointment_create_create(payload) {
  return bikinibodyperformAPI.post(
    `/modules/appointment/service/appointment/create/`,
    payload
  )
}
function modules_appointment_service_appointment_list_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment/service/appointment/list/`
  )
}
function modules_appointment_service_appointment_sync_create(payload) {
  return bikinibodyperformAPI.post(
    `/modules/appointment/service/appointment/sync/`,
    payload
  )
}
function modules_appointment_service_appointment_synced_list_retrieve(payload) {
  return bikinibodyperformAPI.get(
    `/modules/appointment/service/appointment/synced/list/`
  )
}
function rest_auth_login_create(payload) {
  return bikinibodyperformAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return bikinibodyperformAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return bikinibodyperformAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return bikinibodyperformAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return bikinibodyperformAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return bikinibodyperformAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return bikinibodyperformAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return bikinibodyperformAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return bikinibodyperformAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return bikinibodyperformAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return bikinibodyperformAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_appointment_local_appointment_list,
  modules_appointment_local_appointment_create,
  modules_appointment_local_appointment_retrieve,
  modules_appointment_local_appointment_update,
  modules_appointment_local_appointment_partial_update,
  modules_appointment_local_appointment_destroy,
  modules_appointment_local_appointment_session_list,
  modules_appointment_local_appointment_session_create,
  modules_appointment_local_appointment_session_retrieve,
  modules_appointment_local_appointment_session_update,
  modules_appointment_local_appointment_session_partial_update,
  modules_appointment_local_appointment_session_destroy,
  modules_appointment_local_meetings_information_list,
  modules_appointment_local_meetings_information_create,
  modules_appointment_local_meetings_information_retrieve,
  modules_appointment_local_meetings_information_update,
  modules_appointment_local_meetings_information_partial_update,
  modules_appointment_local_meetings_information_destroy,
  modules_appointment_service_appointment_remove_destroy,
  modules_appointment_service_appointment_single_retrieve,
  modules_appointment_service_appointment_create_create,
  modules_appointment_service_appointment_list_retrieve,
  modules_appointment_service_appointment_sync_create,
  modules_appointment_service_appointment_synced_list_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
