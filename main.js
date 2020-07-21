let getElement = sel => document.querySelector(sel);
let getArray = sel => document.querySelectorAll(sel);
let create = sel => document.createElement(sel);


for (let index of getArray(".font-family")) {
	index.style.fontFamily = index.innerText;
	index.style.fontSize = '16px';
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.fontFamily = index.innerText;
		}
	})
}
for (let index of getArray(".font-size")) {
	index.style.fontSize = index.innerText;
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.fontSize = index.innerText;
		}
	})
}
for (let index of getArray(".colors__general-first")) {
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.color = index.getAttribute("name");
		}
	})
}
for (let index of getArray(".colors__general-second")) {
	index.addEventListener("click", function () {
		getElement(".content-text").style.backgroundColor = index.getAttribute("name");
	})
}
let img = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
for (let index = 0; index < getArray(".images__general").length; index++) {
	getArray(".images__general")[index].addEventListener("click", function () {
		getElement("body").setAttribute("class", `${img[index]}`);
	})
}


$(function () {
	for (let i in $(".general")) {
		$(".alert").eq(i).css({
			zIndex: "100",
		})
		$(".general").eq(i).click(function () {
			$("ul").eq(0).addClass("delete");
			$("ul").eq(1).addClass("delete");
			$(".general").css({
				zIndex: "0",
				borderColor: "",
				boxShadow: "",
			})
			$(".general").eq(i).css({
				zIndex: "10",
				borderColor: "lightslategray",
				boxShadow: "0px 0px 10px dodgerblue",
			})
		});
	}

	$(".general").eq(1).click(function () {
		$("p").toggleClass("font-weight");
	});
	$(".general").eq(2).click(function () {
		$("p").toggleClass("font-style");
	});
	$(".general").eq(3).click(function () {
		$("p").removeClass("striking-out");
		$("p").toggleClass("underlining");
	});
	$(".general").eq(4).click(function () {
		$("p").removeClass("underlining");
		$("p").toggleClass("striking-out");
	});


	$(".general").eq(5).click(function () {
		$("p").removeClass("right");
		$("p").removeClass("center");
		$("p").addClass("left");
	});
	$(".general").eq(6).click(function () {
		$("p").removeClass("right");
		$("p").removeClass("left");
		$("p").addClass("center");
	});
	$(".general").eq(7).click(function () {
		$("p").removeClass("left");
		$("p").removeClass("center");
		$("p").addClass("right");
	});


	$(".general").eq(8).click(function () {
		$("ul").eq(0).toggleClass("delete");
	});
	$(".general").eq(9).click(function () {
		$("ul").eq(1).toggleClass("delete");
	});
	$(".general").eq(10).click(function () {
		$(".alert").eq(0).removeClass("delete");
	});
	$(".cancel").click(function () {
		$(".alert").eq(0).addClass("delete");
		$(".alert").eq(1).addClass("delete");
	});
	$(".general").eq(11).click(function () {
		$(".alert").eq(1).removeClass("delete");
	});
	$(".choose__colors").click(function () {
		$(".colors").removeClass("delete");
		$(".images").addClass("delete");
		$(".files").addClass("delete");

		$(".choose__colors").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
		$(".choose__images").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__files").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
	});
	$(".choose__images").click(function () {
		$(".images").removeClass("delete");
		$(".colors").addClass("delete");
		$(".files").addClass("delete");

		$(".choose__colors").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__images").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
		$(".choose__files").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
	});
	$(".choose__files").click(function () {
		$(".files").removeClass("delete");
		$(".images").addClass("delete");
		$(".colors").addClass("delete");

		$(".choose__colors").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__images").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__files").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
    });
    $('.custom-file-input').change(function () {
        let file = this.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
                  $('body').css('background-image', 'url("' + reader.result + '")');
        }
              if (file) {
                      reader.readAsDataURL(file);
              }
          });
  
  
      $(".general").eq(12).click(function () {
          if ($(".user").attr("disabled") === "disabled") {
              $(".alert").eq(2).removeClass("delete");
          } else {
  
          }
      });
      $(".sign-in-content__btn").click(function () {
  
          if ($(".sign-in-content__enter").eq(0).val() === "admin" &&
              $(".sign-in-content__enter").eq(1).val() === "admin") {
              $(".alert").eq(2).addClass("delete");
              $(".sign-in-content__value-text").text("");
              $(".sign-in-content__enter").val("");
              $(".sign-in-content__value-text").css({
                  marginTop: "0",
                  color: "",
              });
              $(".sign-in-content__enter").css({
                  borderColor: "",
              });
              $(".user").attr({
                  "disabled": false
              });
              $(".user").css({
                  backgroundColor: "buttonface",
              });
              } else if ($(".sign-in-content__enter").eq(0).val() === "" &&
              $(".sign-in-content__enter").eq(1).val() === "") {
              $(".sign-in-content__value-text").text("Invalide value");
              $(".sign-in-content__value-text").css({
                  marginTop: "10px",
                  color: "red",
              })
              $(".sign-in-content__enter").css({
                  borderColor: "red",
              })
          } else {
              $(".sign-in-content__value-text").text("Please check your login or password");
              $(".sign-in-content__value-text").css({
                  marginTop: "10px",
                  color: "red",
              })
              $(".sign-in-content__enter").css({
                  borderColor: "red",
              })
          }
          });
  
  });

  $('.user').click(function(){
	$('.general').css({
		display: "none",
	})
	$('.content-text').css({
		display: "none"
	})
	$('.textarea_block').css({
		display: "block"
	})
	$('.general_second').css({
		display: "flex"
	})
  })
 
  
	
	$(".locked").click(function(){ 
		$('#text_area').change(function(){
			let area = $('#text_area').val()
			$('.content-text').html(area)
		})
		$('.content-text').css({
			display: "block"
		})
		$('.textarea_block').css({
			display: "none"
		})
		$('.general_second').css({
			display: "none"
		})
		$('.general').css({
			display: "block"
		})
	});
	


$(".tables").click(function () {
		$(".alert").removeClass("delete");
		$('.create_table').css({
			display: 'flex'
		})
		$('.close').css({
			display: 'none'
		})
	}

)
	let showInvBd = function(n) {
    n.addClass('is-invalid')
}

	function createTbl() {
		let tbl_box = create('div');
		let table = create('table');
		let tbody = create('tbody');
		for (let i = 0; i < $('.count-tr').val(); i++) {
		 tr = document.createElement('tr')
		   for(let i = 0; i < $('.count-td').val(); i++) {
			td = create('td');
			td.innerText = 'TD';
			td.style = `width:${$('.td-width').val()}px; height:${$('.td-height').val()}px; border: 
			${$('.td-border').val()}px ${$('.style-sel').val()} ${$('.color-sel').val()}`;
			tr.appendChild(td)
		  }
		 tbody.appendChild(tr)
		}
		 table.appendChild(tbody)
		  tbl_box.appendChild(table)
		  getElement('#text_area').value += tbl_box.innerHTML
		}

		const regTbl = /^\d+$/;
		
		$('.create-table').click(function() {
		  let  values = [];
		  $('#formT input').each(function() {
			values.push($(this).val());
			if(!regTbl.test($(this).val())) {
			   showInvBd($(this)); 
			   $('.invalid-txt').removeClass('none');
			   $('.invalid-txt').css({
				color: "red",
				marginTop: '10px'
			   })
			   $('.danger').css({
				   borderColor:'red'
			   })
			}
			else $(this).removeClass('is-invalid');
		  })  
		
		  if($('.color-sel').val() == null) {
			 showInvBd($('.color-sel')); 
			 $('.invalid-txt').removeClass('none');
		  }
		  else $('.color-sel').removeClass('is-invalid');
		  if($('.style-sel').val() == null) {
			showInvBd($('.style-sel')); 
			$('.invalid-txt').removeClass('none');
		  }
		
		  else $('.style-sel').removeClass('is-invalid')
		
		
		  if(values.every(n => regTbl.test(n)) && $('.color-sel').val() !== null && $('.style-sel').val() !== null) {
			createTbl() , 
			$('.reset').trigger('click')
			$(".#modalTbl").modal('hide')
			}
		  })

		$('.close_table').click(function(){
			$('.create_table').css({
				display: 'none'
			})
			$('.alert').css({
				display: 'none'
			})
		})
		
		$('.reset').click(function (e) { 
			$('.count-tr').val('');
			$('.count-td').val('');
			$('.td-width').val('');
			$('.td-height').val('');
			$('.td-border').val('');	
		});

		$(".ol").click(function () {
			$(".alert_ol").removeClass("delete");
			$('.list_ol').css({
				display: 'flex'
			})
		})
		function createOlList() {
			let lst_box = create('div');
			let ol = create('ol');
			ol.style.display = 'block'
			ol.type = $('.ol-select').val()
			  for(let i = 1; i <= $('.count_ol').val(); i++) {
			   let li = create('li');
			   li.innerText = `item ${i}`;
			   li.classList.add('lst')
			   ol.appendChild(li);
			  }
			lst_box.appendChild(ol)
			getElement('#text_area').value += lst_box.innerHTML
		   }
		   
		   $('.reset').click(function (e) { 
			$('.count_ol').val('');	
		});


		$('.create-ol').click(function() {
			if(!regTbl.test($('.count_ol').val())){
				showInvBd($('.count_ol'));
			$('.invalid-txt').removeClass('none')
			$('.invalid-txt').css({
				color: "red",
				marginTop: '30px'
			   })
			   $('.danger').css({
				   borderColor:'red'
			   })
			}
			else $('.count_ol').removeClass('is-invalid')
			if($('.ol-select').val() == ''){
				showInvBd($('.ol-select'))
			$('.invalid-txt').css({
				color: "red",
				marginTop: '10px'
			   })
			   $('.danger').css({
				   borderColor:'red'
			   })
			}

			else  $('.ol-select').removeClass('is-invalid')
			if(!regTbl.test($('.count_ol').val()) || $('.ol-select').val() == '') $('.inv_txt').removeClass('none')
			if(regTbl.test($('.count_ol').val()) && $('.ol-select').val() != '') {
			  createOlList(),
			  $('.reset').trigger('click');
			 }
		  })
		
		  $('.close').click(function(){
			$('.list_ol').css({
				display: 'none'
			})
			$('.alert_ol').css({
				display: 'none'
			})
			$('.alert_ul').css({
				display: 'none'
			})
		})
		  
		 $(".ul").click(function () {
			$(".alert_ul").removeClass("delete");
			$('.list_ul').css({
				display: 'flex'
			})
		})
		function createUlList() {
		  let lst_box = create('div');
		  let ul = create('ul');
		  ul.style.display = 'inline-block'
		  ul.style.listStyleType = $('.ul-select').val();
		  for(let i = 1; i <= $('.count_ul').val(); i++) {
		   let li = create('li');
		   li.classList.add('lst')
		   li.innerText = `item ${i}`;
		   ul.appendChild(li);
		  }
		 lst_box.appendChild(ul)
		 getElement('#text_area').value += lst_box.innerHTML
		}
		$('.reset').click(function (e) { 
			$('.count_ul').val('');	
		});
		
		$('.create-ul').click(function() {
		  if(!regTbl.test($('.count_ul').val())){
			showInvBd($('.count_ul'));
			$('.invalid-txt').removeClass('none')
			$('.invalid-txt').css({
				color: "red",
				marginTop: '10px'
			   })
			   $('.danger').css({
				   borderColor:'red'
			   })
		  } 
		  else $('.count_ul').removeClass('is-invalid')
		  if($('.ul-select').val() == ''){
			showInvBd($('.ul-select'))
			$('.invalid-txt').removeClass('none')
			$('.invalid-txt').css({
				color: "red",
				marginTop: '10px'
			   })
			   $('.danger').css({
				   borderColor:'red'
			   })
		  } 
		  else  $('.ul-select').removeClass('is-invalid')
		  if(!regTbl.test($('.count_ul').val()) || $('.ul-select').val() == '') $('.inv-text').removeClass('none')
		  if(regTbl.test($('.count_ul').val()) && $('.ul-select').val() != '') {
			createUlList(), 
			$('.reset').trigger('click');
		  }
		 })
		
		