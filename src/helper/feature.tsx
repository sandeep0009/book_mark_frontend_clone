

interface FeatureProp{
    id:number,
    heading:string,
    para:string,
    src:string

}

export const feature:FeatureProp[]=[
    {
        id:1,
        src:"/images/illustration-features-tab-1.svg",
        heading:"Bookmark in one click",
        para:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        id:2,
        src:"/images/illustration-features-tab-2.svg",
        heading:"Intelligent search",
        para:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        id:3,
        src:"/images/illustration-features-tab-3.svg",
        heading:"Share your bookmarks",
        para:"Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button."
    }

]