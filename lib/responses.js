export function successResponse(message = 'success', data = {}) {
  return Object.assign({}, { success: true, message }, { data });
}

export function errorResponse(message = 'error', data = {}) {
  return Object.assign({}, { success: false, message }, { data });
}
