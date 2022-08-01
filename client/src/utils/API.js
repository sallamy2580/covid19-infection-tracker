import axios from 'axios'

const BASEURL = "https://api.covidtracking.com/v1/states/"

export default {
  getCovidData: function (state){
    
    return axios.get(BASEURL + state + "/current.json")
  },

  /*getWebSearch: function (){
    return axios ({
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params: {
        pageSize: '4',
        q: 'covid-19',
        autoCorrect: 'true',
        pageNumber: '1',
        toPublishedDate: 'null',
        fromPublishedDate: 'null'
      },
      headers: {
        'x-rapidapi-key': 'aa4bbfbbc6msh943bc8aba837399p1827ebjsnde6bed3202fa',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    })
  },*/
    
  getNews: function(){
    return axios({
      method: 'GET',
      url: 'https://gnews.io/api/v4/search?q=covid&country=us&max=2&token=9e746013df81c5af1da62a1daa5e44d3'
    })
  },

  getData: function () {
    return axios({
      method: 'GET',
      url: 'https://covid-19-tracking.p.rapidapi.com/v1',
      headers: {
        'x-rapidapi-key': 'aa4bbfbbc6msh943bc8aba837399p1827ebjsnde6bed3202fa',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
      }
    })
  },

  getMarker: function () {
    return axios.get("/api/marker");
  }
}