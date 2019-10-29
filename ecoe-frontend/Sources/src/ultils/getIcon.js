export const  getUrlImage=(name,subfolder)=>{
    try {
        return require('app/images/icons/'+subfolder+'/'+name+'.svg')
      } catch (e) {
        
        return "";
      }
}