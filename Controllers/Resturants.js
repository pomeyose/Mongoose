const ResturantsSchema = require('../Models/Restarants')
exports.filterResturants = (req,res) => {
    let{mealtype,cuisine, location,lcost,hcost,page,sort}= req.body;
    page =page ? page : 1;
    sort = sort ? sort :1;
    let payload = {};
    const itemsPerPage= 2;
    let startIndex =itemsPerPage* page - itemsPerPage;
    let endIndex =itemsPerPage*page;

    if(mealtype) {
        payload['type.mealtype'] = mealtype;
    }
    if(mealtype && cuisine) {
        payload['type.mealtype'] = mealtype;
        payload['cuisine.cuisine'] ={$in :cuisine}
    }
    if(mealtype && lcost && hcost){
        payload['type.mealtype'] = mealtype;
        payload ['cost'] ={$lse : hcost ,$gte : lcost};
    }
    if(mealtype && cuisine && lcost && hcost){
        payload['type.mealtype'] = mealtype;
        payload ['cost'] ={$lse : hcost ,$gte : lcost};
        payload['cuisine.cuisine'] ={$in :cuisine}
} 
  if(mealtype && location){
    payload['type.mealtype'] = mealtype;
    payload['locality'] = location;
  }
  if(mealtype && location && cuisine){
    payload['type.mealtype'] = mealtype;
    payload['locality'] = location;
    payload['cuisine.cuisine'] ={$in :cuisine}
} 

if(mealtype && location && lcost && hcost){
    payload['type.mealtype'] = mealtype;
    payload['locality'] = location;
    payload ['cost'] ={$lse : hcost ,$gte : lcost};
  }

  if(mealtype && location && lcost && hcost && cuisine){
    payload['type.mealtype'] = mealtype;
    payload['locality'] = location;
    payload ['cost'] ={$lse : hcost ,$gte : lcost};
    payload['cuisine.cuisine'] ={$in :cuisine}
  }
 
 ResturantsSchema.find(payload).sort({cost:sort})
 .then( response =>{
    const filterdResponse = response.slice(startIndex,endIndex);
    res.status(200).json({
        message :'Resturant fetched successfuly',
        Resturants : filterdResponse
    })
 }).catch( err =>{
    res.status(400).json({
        error: err
    });
 })


  }



