const metaTags = (type = 'machinerypal') => {

    // switch(type){
    //   //for home
    //   case (type==='/'):

    //   //for contact
    //   case (type==='/contact'):

    //   //for resume
    //   case (type==='/resume'):

    //   //for projects page
    //   case (type==='/projects'):

    //   //for specific projects
    //   default:
    // }
    let meta
    if (type === 'general') {
        //GENERAL

        //removing old tags
        document.querySelector("[name='title']") && document.querySelector("[name='title']").remove();
        document.querySelector("[name='description']") && document.querySelector("[name='description']").remove();
        document.title = ownerInfo.name + ownerInfo.title;
        meta = document.createElement('meta');
        //primary meta tag
        meta.name = 'title';
        meta.content = ownerInfo.name + ' ' + ownerInfo.title;
        document.getElementsByTagName('head')[0].append(meta);
        meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Projects';
        document.getElementsByTagName('head')[0].append(meta);

        //OG / FB

        //removing old tags
        document.querySelector("[name='og:type']") && document.querySelector("[name='og:type']").remove();
        document.querySelector("[name='og:url']") && document.querySelector("[name='og:url']").remove();
        document.querySelector("[name='og:title']") && document.querySelector("[name='og:title']").remove();
        document.querySelector("[name='og:description']") && document.querySelector("[name='og:description']").remove();
        document.querySelector("[name='og:image']") && document.querySelector("[name='og:image']").remove();

        //first
        meta = document.createElement('meta');
        meta.name = 'og:type';
        meta.setAttribute('property', 'og:type');
        meta.content = 'website';
        document.getElementsByTagName('head')[0].append(meta);
        //second
        meta = document.createElement('meta');
        meta.name = 'og:url';
        meta.setAttribute('property', 'og:url');
        meta.content = domain;
        document.getElementsByTagName('head')[0].append(meta);
        //third
        meta = document.createElement('meta');
        meta.name = 'og:title';
        meta.setAttribute('property', 'og:title');
        meta.content = ownerInfo.name + ' ' + ownerInfo.title
        document.getElementsByTagName('head')[0].append(meta);
        //fourth
        meta = document.createElement('meta');
        meta.name = 'og:description';
        meta.setAttribute('property', 'og:description');
        meta.content = ownerInfo.description;
        document.getElementsByTagName('head')[0].append(meta);
        //fourth
        meta = document.createElement('meta');
        meta.name = 'og:image';
        meta.setAttribute('property', 'og:image');
        meta.content = 'https://www.alexcode.io/logo512.png';
        document.getElementsByTagName('head')[0].append(meta);

        //TWITTER

        //removing old tags
        document.querySelector("[name='twitter:card']") && document.querySelector("[name='twitter:card']").remove();
        document.querySelector("[name='twitter:url']") && document.querySelector("[name='twitter:url']").remove();
        document.querySelector("[name='twitter:title']") && document.querySelector("[name='twitter:title']").remove();
        document.querySelector("[name='twitter:description']") && document.querySelector("[name='twitter:description']").remove();
        document.querySelector("[name='twitter:image']") && document.querySelector("[name='twitter:image']").remove();

        //first
        meta = document.createElement('meta');
        meta.name = 'twitter:card';
        meta.setAttribute('property', 'twitter:card');
        meta.content = 'summary_large_image';
        document.getElementsByTagName('head')[0].append(meta);
        //second
        meta = document.createElement('meta');
        meta.name = 'twitter:url';
        meta.setAttribute('property', 'twitter:url');
        meta.content = domain;
        document.getElementsByTagName('head')[0].append(meta);
        //third
        meta = document.createElement('meta');
        meta.name = 'twitter:title';
        meta.setAttribute('property', 'twitter:title');
        meta.content = ownerInfo.name + ' ' + ownerInfo.title;
        document.getElementsByTagName('head')[0].append(meta);
        //fourth
        meta = document.createElement('meta');
        meta.name = 'twitter:description';
        meta.setAttribute('property', 'twitter:description');
        meta.content = ownerInfo.description;
        document.getElementsByTagName('head')[0].append(meta);
        //fourth
        meta = document.createElement('meta');
        meta.name = 'twitter:image';
        meta.setAttribute('property', 'twitter:image');
        meta.content = 'https://www.alexcode.io/logo512.png';
        document.getElementsByTagName('head')[0].append(meta);

        return
    }

    //GENERAL

    //removing old tags
    document.querySelector("[name='title']") && document.querySelector("[name='title']").remove();
    document.querySelector("[name='description']") && document.querySelector("[name='description']").remove();
    document.title = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    meta = document.createElement('meta');
    //primary meta tag
    meta.name = 'title';
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].append(meta);
    meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Projects';
    document.getElementsByTagName('head')[0].append(meta);

    //OG / FB

    //removing old tags
    document.querySelector("[name='og:type']") && document.querySelector("[name='og:type']").remove();
    document.querySelector("[name='og:url']") && document.querySelector("[name='og:url']").remove();
    document.querySelector("[name='og:title']") && document.querySelector("[name='og:title']").remove();
    document.querySelector("[name='og:description']") && document.querySelector("[name='og:description']").remove();
    document.querySelector("[name='og:image']") && document.querySelector("[name='og:image']").remove();

    //first
    meta = document.createElement('meta');
    meta.name = 'og:type';
    meta.setAttribute('property', 'og:type');
    meta.content = 'website';
    document.getElementsByTagName('head')[0].append(meta);
    //second
    meta = document.createElement('meta');
    meta.name = 'og:url';
    meta.setAttribute('property', 'og:url');
    meta.content = shortProjects[type] ? domain + shortProjects[type].url : 'https://www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);
    //third
    meta = document.createElement('meta');
    meta.name = 'og:title';
    meta.setAttribute('property', 'og:title');
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].append(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'og:description';
    meta.setAttribute('property', 'og:description');
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'og:image';
    meta.setAttribute('property', 'og:image');
    meta.content = shortProjects[type] ? domain + shortProjects[type].main.image.replace('../', '/').replace('./', '/') : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);

    //TWITTER

    //removing old tags
    document.querySelector("[name='twitter:card']") && document.querySelector("[name='twitter:card']").remove();
    document.querySelector("[name='twitter:url']") && document.querySelector("[name='twitter:url']").remove();
    document.querySelector("[name='twitter:title']") && document.querySelector("[name='twitter:title']").remove();
    document.querySelector("[name='twitter:description']") && document.querySelector("[name='twitter:description']").remove();
    document.querySelector("[name='twitter:image']") && document.querySelector("[name='twitter:image']").remove();

    //first
    meta = document.createElement('meta');
    meta.name = 'twitter:card';
    meta.setAttribute('property', 'twitter:card');
    meta.content = 'summary_large_image';
    document.getElementsByTagName('head')[0].append(meta);
    //second
    meta = document.createElement('meta');
    meta.name = 'twitter:url';
    meta.setAttribute('property', 'twitter:url');
    meta.content = shortProjects[type] ? domain + shortProjects[type].url : 'https://www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);
    //third
    meta = document.createElement('meta');
    meta.name = 'twitter:title';
    meta.setAttribute('property', 'twitter:title');
    meta.content = shortProjects[type] ? shortProjects[type].main.title : 'Projects';
    document.getElementsByTagName('head')[0].append(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'twitter:description';
    meta.setAttribute('property', 'twitter:description');
    meta.content = shortProjects[type] ? shortProjects[type].main.description : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);
    //fourth
    meta = document.createElement('meta');
    meta.name = 'twitter:image';
    meta.setAttribute('property', 'twitter:image');
    meta.content = shortProjects[type] ? domain + shortProjects[type].main.image.replace('../', '/').replace('./', '/') : 'Check how to build a portfolio like this from https:www.alexcode.io';
    document.getElementsByTagName('head')[0].append(meta);



    // <!-- Twitter -->
    // <meta property="twitter:card" content="summary_large_image">
    // <meta property="twitter:url" content="https://metatags.io/">
    // <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
    // <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    // <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
}

