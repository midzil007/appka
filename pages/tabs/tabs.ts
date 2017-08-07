import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { CustomerPage } from '../customer/customer';
import { BasketPage } from '../basket/basket';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CustomerPage;  
  tab2Root = BasketPage;
  tab3Root = ContactPage; 

  constructor() {

  }
}
