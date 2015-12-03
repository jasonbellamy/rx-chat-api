export function successResponse(message = 'success', object = {}) {
  return Object.assign({}, { success: true, message }, { entities: object });
}

export function errorResponse(message = 'error', object = {}) {
  return Object.assign({}, { success: false, message }, { entities: object });
}
