// legend data
var app = app || {};

app.legends = (function(){
  return {
    data : [
      {
        title : "Population Density", // ppl per sq mile
        items : [
          {
            color : "#ffffff",
            label : "0"
          },{
            color : "#fcfaef",
            label : "1 - 2,500"
          },{
            color : "#f0ecd7",
            label : "2,501 - 4,000"
          },{
            color : "#e8dc91",
            label : "4,001 - 5,500"
          },{
            color : "#dfcd66",
            label : "5,501 - 7,500"
          },{
            color : "#cfb928",
            label : "7,501 or more"
          }
        ]
      },

      {
        title : "Median Household Income",
        items : [
            {
            color : "#dcf5e8",
            label : "0 - $25,000"
          },{
            color : "#a5d0b4",
            label : "$25,001 - $50,000"
          },{
            color : "#75ab7e",
            label : "$50,001 - $65,000"
          },{
            color : "#4f8759",
            label : "$65,001 - $75,000"
          },{
            color : "#216437",
            label : "$75,001 or more"
          }
        ]
      },

      {
        title : "Asthma Rate",
        items : [
            {
            color : "#ffffff",
            label : "0"
          },{
            color : "#bfa4cd",
            label : "0 - 5"
          },{
            color : "#9c7aac",
            label : "6 - 9"
          },{
            color : "#7a518b ",
            label : "10 - 20"
          },{
            color : "#5a3072",
            label : "21 - 35"
          }
        ]
      },

      {
        title : "Future Flood Risk",
        items : [
          {
            color : "#93a5b6",
            label : "Projected 500-year storm"
          },
          {
            color : "#2E5387",
            label : "Projected 100-year storm"
          }
        ]
      },

      {
        title : "Polluted Places",
        items : [
          {
            color : "#feb9f0",
            label : "Plume"
          },
          {
            color : "#feff83",
            label : "Superfund"
          },
          {
            color : "#f3cc81",
            label : "Brownfield"
          }
        ]
      },

      {
        title : "Poluted Sites",
        items : [
          {
            color : "#aa04ee",
            label : "EPA Regulated"
          },
          {
            color : "#fba782",
            label : "E-Designated"
          },
          {
            color : "#7b0006",
            label : "Spills > 100 Gallons"
          },
          {
            color : "#e171fb",
            label : "Spills < 100 Gallons"
          }
        ]
      },

      {
        title : "",
        items : [
          {
            color : "#a00002",
            label : "Waste Transfer Stations"
          }
        ]
      }
    ]
  }
})();