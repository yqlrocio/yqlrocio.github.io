// controller.js
const Controller = {
 init() {
   this.bindEvents();
   this.updateView();
 },
 bindEvents() {
   $('#add-item-button').on('click',()=>{
   const newItem=$('#item-input').val();
      
if (newItem) {
        Model.addItem(newItem);
        this.updateView();
    $('#item-input').val('');
      }
    });
  },
  updateView() {
    const items = Model.getItems();
    View.render(items);
  },
};
