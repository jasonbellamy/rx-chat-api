export function successResponse(message = '', object = {}) {
  return Object.assign({}, { success: true, message }, { entities: object });
}

export function errorResponse(message = '', object = {}) {
  return Object.assign({}, { success: false, message }, { entities: object });
}
