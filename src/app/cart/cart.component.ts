import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    //Processa os dados de checkoutForm
    console.warn(this.items.length);
    this.items = this.cartService.clearCart();
    console.warn('Seu Pedido foi enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removerItem(product: Product) {
    this.cartService.removerItem(product);
  }

  exibirTexto: boolean = false;

  acaoNgIf(teste: number) {
    this.exibirTexto = !this.exibirTexto;
  }
}
