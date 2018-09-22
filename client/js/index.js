//written by JingXuan Li
//javascript file for index page, using Vuejs framework


// url constant
const data_url = "http://127.0.0.1:5000/";




// Vuejs framework
var v = new Vue({
    el: '#index',

    data: {
        first_slide: 'Hello Vue!',
        second_slide: 'Hello Vue!',
        thrid_slide: 'Hello Vue!',
        code1: 'COMP9021',
        code2: 'COMP9021',
        code3: 'COMP9021',
        code4: 'COMP9021',
        code5: 'COMP9021',
        code6: 'COMP9021',
    },
    // data: {
        //     rows: '',
        //     year: '2018',
        //     country: 'Russia',
        //     c : {},
        //     code: 'RU',
        //
        // },


    mounted: function () {
        var self = this;

        $.ajax({
            url: data_url + '1/',
            method: 'GET',
            success: function (data) {
                self.rows = data;
            },
            error: function (error) {
                console.log(error);
            }
        });

        //get top10
        $.ajax({
            url: data_url + '2/',
            method: 'GET',
            async: false,
            success: function (data) {
                console.log(data);
                country=[];
                dataset = [];
                for(var i = 0;i< data.length; i++){
                    country.push(data[i]['Country']);
                    dataset.push(data[i]['Count'])
                }
            },
            error : function (error) {
                console.log(error);
            }
        });

        this.info();



    },

    methods: {
        sendParams:function () {
            this.$router.push({
                path: 'client/course.html',
                name: '',
                params: {
                    name: 'code',
                    // dataObj: this.code1
                }

            })
        },


        info : function(code){
        	// this.code1= code;
        	// console.log(code1);

        	var self = this;
		        $.ajax({
		            url: data_url + 'detail/'+this.code1,
		            method: 'GET',
		            success: function (data) {
		                console.log(data)
		                    // self.c=data[0];
		                    // self.code=data[0]['CountryCode'];
		                    // document.getElementById('jpflag').style.display="none";
		                    // if(self.code == 'KR/JP'){
		                    //     document.getElementById('jpflag').style.display="block";
		                    // }
		            },
		            error: function (error) {
		                    console.log(error);
		            }
		    });

		        var self = this;
		        $.ajax({
		            url: data_url + 'resource/'+this.code1,
		            method: 'GET',
		            success: function (data) {
		                console.log(data)
		                    // self.c=data[0];
		                    // self.code=data[0]['CountryCode'];
		                    // document.getElementById('jpflag').style.display="none";
		                    // if(self.code == 'KR/JP'){
		                    //     document.getElementById('jpflag').style.display="block";
		                    // }
		            },
		            error: function (error) {
		                    console.log(error);
		            }
		    });


        },
        capitalize: function(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        mapping: function(){

            this.info();

            var self= this;
            $.ajax({
                url: google_url + 'country/'+this.country,
                method: 'GET',
                async: false,
                success: function (data) {

                    var country_coordinate=data[data.length-1]['Country Coordinate'].split(',');
                    self.map_center=[parseFloat(country_coordinate[0]), parseFloat(country_coordinate[1])];

                    self.stadium_coordinates=[];

                    self.stadium_names=[];
                    self.stadium_address=[];

                    for(var i = 0;i<data.length-1; i++){
                        if (data[i]["Coordinate"] == null){
                            continue;
                        };
                            var latlong=data[i]["Coordinate"].split(',');
                            var gloc = new google.maps.LatLng(parseFloat(latlong[0]), parseFloat(latlong[1]));
                            self.stadium_coordinates.push(gloc);
                            self.stadium_names.push(data[i]["Stadium"]);
                            self.stadium_address.push(data[i]["Address"]);

                    };


                },
                error : function (error) {
                    console.log(error);
                }

            });
            this.google();
        },
        table: function(new_c){
            this.country=new_c[0];
            this.year = new_c[1];
            this.mapping();
        },




    }
});



// Vuejs framework
var v = new Vue({
    el: '#course',

    data: {
        the_code: 'COMP9021'

    },
    // data: {
        //     rows: '',
        //     year: '2018',
        //     country: 'Russia',
        //     c : {},
        //     code: 'RU',
        //
        // },


    mounted: function () {
        this.info();
        var self = this;

        $.ajax({
            url: data_url,
            method: 'GET',
            success: function (data) {
                self.rows = data;
            },
            error: function (error) {
                console.log(error);
            }
        });

        //get top10
        $.ajax({
            url: data_url + 'banner/',
            method: 'GET',
            async: false,
            success: function (data) {
                console.log(data);
                country=[];
                dataset = [];
                for(var i = 0;i< data.length; i++){
                    country.push(data[i]['Country']);
                    dataset.push(data[i]['Count'])
                    data['oranisation entries'][i] = 0;
                }
            },
            error : function (error) {
                console.log(error);
            }
        });

        // this.info();



    },

    methods: {
        sendParams:function () {
            this.$router.push({
                path: 'client/course.html',
                name: '',
                params: {
                    name: 'code',
                    // dataObj: this.code1
                }

            })
        },


        info : function(code){
        	// this.code1= code;
        	// console.log(code1);

        	var self = this;
		        $.ajax({
		            url: data_url + 'detail/'+this.code1,
		            method: 'GET',
		            success: function (data) {
		                console.log(data)
		                    // self.c=data[0];
		                    // self.code=data[0]['CountryCode'];
		                    // document.getElementById('jpflag').style.display="none";
		                    // if(self.code == 'KR/JP'){
		                    //     document.getElementById('jpflag').style.display="block";
		                    // }
		            },
		            error: function (error) {
		                    console.log(error);
		            }
		    });

		        var self = this;
		        $.ajax({
		            url: data_url + 'resource/'+this.code1,
		            method: 'GET',
		            success: function (data) {
		                console.log(data)
		                    // self.c=data[0];
		                    // self.code=data[0]['CountryCode'];
		                    // document.getElementById('jpflag').style.display="none";
		                    // if(self.code == 'KR/JP'){
		                    //     document.getElementById('jpflag').style.display="block";
		                    // }
		            },
		            error: function (error) {
		                    console.log(error);
		            }
		    });


        },
        capitalize: function(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        mapping: function(){

            this.info();

            var self= this;
            $.ajax({
                url: google_url + 'country/'+this.country,
                method: 'GET',
                async: false,
                success: function (data) {

                    var country_coordinate=data[data.length-1]['Country Coordinate'].split(',');
                    self.map_center=[parseFloat(country_coordinate[0]), parseFloat(country_coordinate[1])];

                    self.stadium_coordinates=[];

                    self.stadium_names=[];
                    self.stadium_address=[];

                    for(var i = 0;i<data.length-1; i++){
                        if (data[i]["Coordinate"] == null){
                            continue;
                        };
                            var latlong=data[i]["Coordinate"].split(',');
                            var gloc = new google.maps.LatLng(parseFloat(latlong[0]), parseFloat(latlong[1]));
                            self.stadium_coordinates.push(gloc);
                            self.stadium_names.push(data[i]["Stadium"]);
                            self.stadium_address.push(data[i]["Address"]);

                    };


                },
                error : function (error) {
                    console.log(error);
                }

            });
            this.google();
        },
        table: function(new_c){
            this.country=new_c[0];
            this.year = new_c[1];
            this.mapping();
        },




    }
});
