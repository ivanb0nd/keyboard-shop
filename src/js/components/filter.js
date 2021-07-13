$(document).ready(function() {
  $('.btn-filter').click(function() {
    $(this).toggleClass('active').next().children().slideToggle(500, 'linear');
  });
});

if (document.querySelector('.filter')) {
  let resetBtn = document.querySelector('.filter__reset-btn');

  let resetInputs = function() {
    let filterInputs = document.querySelectorAll('.filter-input');

    filterInputs.forEach((input) => {
      if(input.checked == true) {
        input.checked = false;
      }
    });
  };


  resetBtn.addEventListener('click', resetInputs);


}
