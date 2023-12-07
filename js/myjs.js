// $(document).ready(function(){
// 	$("#example").click(function(){
// 		$("#inputcontent").text();
// 		$.ajax({
// 		           url:'example.txt',
// 		           dataType:'text',
// 		           success:function(data){
// 		           	$("#inputcontent").text(data);
// 		           }
// 		       });
// 		console.log("jiehsu")
// 	})
// });


	
		$(document).ready(function () {
			$("#Contact Us").click(function (e) {
				if ($(this).attr("href").length) {
					e.preventDefault();
					$(this).tab('show');
					$("#navFrame").attr("src", $(this).attr("href"));
				}
			});
			
		});
		
function clearFile(){
                  //alert("aadfas")
                  $("#inputcontent").text("");
		}
function openExample(){
	$("#inputcontent").text();
		$.ajax({
		           url:'../data/example.txt',
		           dataType:'text',
		           success:function(data){
		           	$("#inputcontent").text(data);
		           }
		       });
	
}

function validateFasta(fasta) {

			if (!fasta) { // check there is something first of all
				return false;
			}

			// immediately remove trailing spaces
			fasta = fasta.trim();

			// split on newlines... 
			var lines = fasta.split('\n');

			// check for header
			if (fasta[0] == '>') {
				// remove one line, starting at the first position
				lines.splice(0, 1);
			}

			// join the array back into a single string without newlines and 
			// trailing or leading spaces
			fasta = lines.join('').trim();

			if (!fasta) { // is it empty whatever we collected ? re-check not efficient 
				return false;
			}

			// note that the empty string is caught above
			// allow for Selenocysteine (U)
			//return /^[ACDEFGHIKLMNPQRSTUVWY\s]+$/i.test(fasta);
			return /^[ABCDEFGHIJKLMNOPQRSTUVWXYZ\s]+$/i.test(fasta);
		}
//用于生成uuid
		function S4() {
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}
		function guid() {
			return (S4()+S4()+S4());
		}
function goAnalysis(){
			var text = $("#inputcontent").val();
			if(text == ''){
				return;
			}
			
			var len = text.split(">").length-1;
			
			if(len > 100){
				//$("#mycontent").hide();
				//$("#infoDivf").show();
				//return;
			}
                        text = text.replace(' ','');
                        var xx = text.split('\n');
                        var tlen = 0;
                        var bpArr = new Array()
						var seqArr = new Array()
						var seqStr = ''
						var isValid = true;
						var isIDValid = true;
                        for(i=0;i<xx.length;i++){
                                var t = xx[i];    
                                //console.log(t);
								if(!isValid){
									break;
								}
                                if(t.indexOf(">") != -1){
									if(t.indexOf("*")!=-1){
										isIDValid = false;
										break;
									}
                                      if(tlen>0){
                                          bpArr.push(tlen);
										  isValid = validateFasta(seqStr)
										  //alert(isValid)

                                      }
                                      tlen = 0;
									  seqStr = '';
									  seqStr = seqStr + t +'\n';
                                      continue;
                                }else{
                                      var _tlen=t.length;
                                      tlen = tlen + _tlen;
									  seqStr = seqStr + t ;
                                }
                                if( i==xx.length-1){
                                      if(tlen>0){
                                          bpArr.push(tlen);
										  isValid = validateFasta(seqStr)
										  //alert(isValid)
                                      }
                                      tlen = 0;
									  seqStr = '';
                                      continue;
                                }
                        }
						
                        //alert(bpArr);
                        if(!isValid){
							$("#mycontent").hide();
							$("#bperrDiv").show();
							//$("#errlineno").html(i)
							return;
                        }
				        if(!isIDValid){
							$("#mycontent").hide();
							$("#iderrDiv").show();
							//$("#errlineno").html(i)
							return;
                        }
						if(len>100){
							$("#mycontent").hide();
							$("#lenerrDiv").show();
							return;
                        }
			// var uuid = guid() + "_" + Math.ceil(new Date().getTime()/1000);
			// $.post("http://www.computationalbiology.cn/3CLP/submitTask",{uuid: uuid, querySeq: text},function(dd){
				
			 	window.location.href = "./result.html";
				var iframe=document.getElementById("myiframe");
				
				iframe.addEventListener('load',function(){
					var a=document.querySelector("iframe");
					var b=a.contentWindow.document;
					b.getElementById("waitDiv").style.display="block";
					})
			// 	console.log(uuid);
			// });
		
		
        }
function back(){
	$("#mycontent").show();
	$("#bperrDiv").hide();
}
 $.ajax({
        url: '../data/data1.json', // 替换为你的 API 地址
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // 成功获取数据后，处理数据并生成表格
            generateTable(data);
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
 // 生成表格的函数
    function generateTable(data) {
        var tableBody = $('#data-table1 tbody');
 
        // 清空表格内容
        tableBody.empty();
 
        // 遍历数据并添加到表格
        $.each(data, function(index, item) {
            var row = '<tr>' +
                        '<td>' + item.Genus + '</td>' +
                        '<td>' + item.Species + '</td>' +
                        '<td>' + item.Accessionnumber+ '</td>' +
 						'<td>' + item.Definition + '</td>' +
 						'<td style="width:300psx">' + item.Cleavagesites + '</td >' +
                      '</tr>';
            tableBody.append(row);
        });
    }
function changeFile(event) {
			if(isLowerIE9()){
				console.log($(event.target).val())
				return;
			}

			var files = document.getElementById("fileInput").files;
			//if(files.length > 0){
			//    $scope.inputGroup = [];
			//}
			//for(var i in files){
				var file = files[0];
				var reader = new FileReader();
				reader.onload = function() {
					var text = this.result;
					$("#textarea1").val(text);
					//$scope.inputGroup.push({name: '',value: text});
					//console.log($scope.inputGroup);
				}
				try{
					reader.readAsText(file);
				}catch(e){
					console.log(e);
				}
			//}
		};
var question =document.getElementById("question");
question.addEventListener("focus",function(){
	$("#quesionDiv").show();
})
	
