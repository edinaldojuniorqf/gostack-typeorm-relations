import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    let product: Product | undefined;

    product = await this.productsRepository.findByName(name);

    // console.log('product', product);
    // console.log('products', await this.productsRepository.findAll());

    if (product) {
      throw new AppError(`Product ${name} already registred.`);
    }

    product = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;
  }
}

export default CreateProductService;
