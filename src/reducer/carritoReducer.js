


export const carritoReducer = (initialState, action) => {
  switch (action.type) {

    case "add_product":
      return [...initialState, action.payload]


    case "remove_product":
      return initialState.filter(producto => producto.id !== action.payload)

    default:
      return initialState
  }
}
