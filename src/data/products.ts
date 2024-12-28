interface GetProductsFilters {
  id: string | null
  name: string | null
}

export async function getProducts({ id, name }: GetProductsFilters) {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let products = [
    { id: 8423, name: 'Produto 1', price: '54.22' },
    { id: 5231, name: 'Produto 2', price: '43.67' },
    { id: 1358, name: 'Produto 3', price: '78.56' },
    { id: 4597, name: 'Produto 4', price: '33.29' },
    { id: 2048, name: 'Produto 5', price: '24.89' },
    { id: 9354, name: 'Produto 6', price: '52.15' },
    { id: 3761, name: 'Produto 7', price: '60.34' },
    { id: 5310, name: 'Produto 8', price: '44.90' },
    { id: 2843, name: 'Produto 9', price: '36.76' },
    { id: 7291, name: 'Produto 10', price: '67.41' },
    { id: 5732, name: 'Produto 11', price: '29.52' },
    { id: 8106, name: 'Produto 12', price: '72.69' },
    { id: 4218, name: 'Produto 13', price: '25.18' },
    { id: 6284, name: 'Produto 14', price: '41.99' },
    { id: 7392, name: 'Produto 15', price: '58.74' },
    { id: 9817, name: 'Produto 16', price: '26.04' },
    { id: 1463, name: 'Produto 17', price: '62.41' },
    { id: 3924, name: 'Produto 18', price: '39.55' },
    { id: 6052, name: 'Produto 19', price: '27.78' },
    { id: 2840, name: 'Produto 20', price: '74.99' },
  ]

  if (id) {
    products = products.filter(product => product.id === Number(id))
  }

  if (name) {
    products = products.filter(product => product.name.includes(name))
  }

  return products
}

interface CreateProductsRequest {
  name: string
  price: string
}

export async function createProduct(data: CreateProductsRequest) {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return data
}
