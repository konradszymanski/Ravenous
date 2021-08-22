const apiKey = 'K79Z-3kwu_hi9TYu-g323ZU75ZSmssFHijzLH6Za9Yx58TOCEHU8wQQY8WaBm5j_eyRuPdWTcznu8P93f1CNo6eL5m3stndYFOxkxRM2b870AZY8eqMGMSlCt2siYXYx'


const Yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
              Authorization: `Bearer ${apiKey}` 
        }}).then(response =>{
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => { 
                    return {id: business.id, 
                    imageSrc: business.image_url, 
                    name: business.name, 
                    address: business.location.address1,
                    city: business.location.city, 
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    }
                })
            }
        })
    }
     

        
}
export default Yelp