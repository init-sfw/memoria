  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Overscroll/jquery.overscroll.js at master · azoff/Overscroll · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Dfvhihq8FEd9OckbFTyfOxmcklytGCbq4+fdPPNXg+0=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-64354b3684a175db223715fcd6748b0daf8aebbc.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-883c2d036f95a0fb486a5d977a84cb0b91a58353.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-af722d045ae48a4eaa88da3a9a035a24422643e0.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="ab8d8f64c5a45a6c9a740db2c4071f6b">

        <link data-pjax-transient rel='permalink' href='/azoff/Overscroll/blob/901c6eb28aa3b69b0dfe6554fb302be4512b7a72/jquery.overscroll.js'>
    <meta property="og:title" content="Overscroll"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/azoff/Overscroll"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/0ca5178ee371114b35b5b7f813b5d8db?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Overscroll is a jQuery Plugin and polyfill for mobile safari&#39;s overflow-scrolling style. It is intended for use in a desktop browser."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="azoff/Overscroll"/>

    <meta name="description" content="Overscroll is a jQuery Plugin and polyfill for mobile safari&#39;s overflow-scrolling style. It is intended for use in a desktop browser." />


    <meta content="160452" name="octolytics-dimension-user_id" /><meta content="588971" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/azoff/Overscroll/commits/master.atom" rel="alternate" title="Recent Commits to Overscroll:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="https://github.com/signup">Sign up</a>
      <a class="button" href="https://github.com/login?return_to=%2Fazoff%2FOverscroll%2Fblob%2Fmaster%2Fjquery.overscroll.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="azoff/Overscroll"
      data-branch="master"
      data-sha="0d1a2ae4f648bc87475ead5e1c0fd63f85468f1a"
  >

    <input type="hidden" name="nwo" value="azoff/Overscroll" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fazoff%2FOverscroll"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/azoff/Overscroll/stargazers">
        301
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fazoff%2FOverscroll"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/azoff/Overscroll/network" class="social-count">
        54
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/azoff" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">azoff</span>
                  </a></span> /
                <strong><a href="/azoff/Overscroll" class="js-current-repository">Overscroll</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/azoff/Overscroll/pulse" class="js-selected-navigation-item " data-selected-links="pulse /azoff/Overscroll/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/azoff/Overscroll" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /azoff/Overscroll">Code</a></li>
    <li><a href="/azoff/Overscroll/network" class="js-selected-navigation-item " data-selected-links="repo_network /azoff/Overscroll/network">Network</a></li>
    <li><a href="/azoff/Overscroll/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /azoff/Overscroll/pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/azoff/Overscroll/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /azoff/Overscroll/issues">Issues <span class='counter'>9</span></a></li>

      <li><a href="/azoff/Overscroll/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /azoff/Overscroll/wiki">Wiki</a></li>


    <li><a href="/azoff/Overscroll/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /azoff/Overscroll/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/azoff/Overscroll/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /azoff/Overscroll/tags">Tags <span class="counter ">15</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/master/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.7.2/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7.2" rel="nofollow" title="1.7.2">1.7.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.7.1/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7.1" rel="nofollow" title="1.7.1">1.7.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.7.0/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.7.0" rel="nofollow" title="1.7.0">1.7.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.6.4/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.4" rel="nofollow" title="1.6.4">1.6.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.6.3/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.3" rel="nofollow" title="1.6.3">1.6.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.6.1/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.1" rel="nofollow" title="1.6.1">1.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.6.0/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.6.0" rel="nofollow" title="1.6.0">1.6.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.5.2/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5.2" rel="nofollow" title="1.5.2">1.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.5.1/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5.1" rel="nofollow" title="1.5.1">1.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.5.0/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.5.0" rel="nofollow" title="1.5.0">1.5.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.4.9/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.9" rel="nofollow" title="1.4.9">1.4.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.4.8/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.8" rel="nofollow" title="1.4.8">1.4.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.4.7/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.7" rel="nofollow" title="1.4.7">1.4.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.4.6/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.6" rel="nofollow" title="1.4.6">1.4.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/azoff/Overscroll/blob/1.4.5/jquery.overscroll.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.5" rel="nofollow" title="1.4.5">1.4.5</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/azoff/Overscroll" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /azoff/Overscroll">Files</a></li>
    <li><a href="/azoff/Overscroll/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /azoff/Overscroll/commits/master">Commits</a></li>
    <li><a href="/azoff/Overscroll/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /azoff/Overscroll/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:17c477090ddff8cfb26f85907c6ce202 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:17c477090ddff8cfb26f85907c6ce202 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/azoff/Overscroll" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Overscroll</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.overscroll.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.overscroll.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/azoff/Overscroll/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/82e0a86fd5c6a105515210a7c83f0472?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/joshweinstein" rel="author">joshweinstein</a></span>
    <time class="js-relative-date" datetime="2013-03-19T02:14:43-07:00" title="2013-03-19 02:14:43">March 19, 2013</time>
    <div class="commit-title">
        <a href="/azoff/Overscroll/commit/255d9153a2eecf9d1c30c884f7307f607ff4b54a" class="message">Update to v1.7.2</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="azoff" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=azoff"><img height="20" src="https://secure.gravatar.com/avatar/0ca5178ee371114b35b5b7f813b5d8db?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="googollee" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=googollee"><img height="20" src="https://secure.gravatar.com/avatar/15b7fc1b101ee289b81678812781aea6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="KingRial" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=KingRial"><img height="20" src="https://secure.gravatar.com/avatar/f2f775cccaf4f739e2204b2aa7658db1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rspenc29" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=rspenc29"><img height="20" src="https://secure.gravatar.com/avatar/7a958b54c351e822ff74c534fc6b4a18?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="joshweinstein" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=joshweinstein"><img height="20" src="https://secure.gravatar.com/avatar/82e0a86fd5c6a105515210a7c83f0472?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="coeamyd" href="/azoff/Overscroll/commits/master/jquery.overscroll.js?author=coeamyd"><img height="20" src="https://secure.gravatar.com/avatar/848504484fe5f34bbe40d6c2251128e3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0ca5178ee371114b35b5b7f813b5d8db?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/azoff">azoff</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/15b7fc1b101ee289b81678812781aea6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/googollee">googollee</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f2f775cccaf4f739e2204b2aa7658db1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/KingRial">KingRial</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7a958b54c351e822ff74c534fc6b4a18?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rspenc29">rspenc29</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/82e0a86fd5c6a105515210a7c83f0472?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/joshweinstein">joshweinstein</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/848504484fe5f34bbe40d6c2251128e3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/coeamyd">coeamyd</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/azoff/Overscroll/blob/901c6eb28aa3b69b0dfe6554fb302be4512b7a72/jquery.overscroll.js" data-title="Overscroll/jquery.overscroll.js at master · azoff/Overscroll · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>770 lines (649 sloc)</span>
                <span>21.211 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/azoff/Overscroll/raw/master/jquery.overscroll.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/azoff/Overscroll/blame/master/jquery.overscroll.js" class="button minibutton ">Blame</a>
                  <a href="/azoff/Overscroll/commits/master/jquery.overscroll.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Overscroll v1.7.2</span></div><div class='line' id='LC3'><span class="cm"> *  A jQuery Plugin that emulates the iPhone scrolling experience in a browser.</span></div><div class='line' id='LC4'><span class="cm"> *  http://azoffdesign.com/overscroll</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Intended for use with the latest jQuery</span></div><div class='line' id='LC7'><span class="cm"> *  http://code.jquery.com/jquery-latest.js</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Copyright 2013, Jonathan Azoff</span></div><div class='line' id='LC10'><span class="cm"> * Licensed under the MIT license.</span></div><div class='line' id='LC11'><span class="cm"> *  https://github.com/azoff/overscroll/blob/master/mit.license</span></div><div class='line' id='LC12'><span class="cm"> *</span></div><div class='line' id='LC13'><span class="cm"> * For API documentation, see the README file</span></div><div class='line' id='LC14'><span class="cm"> *  http://azof.fr/pYCzuM</span></div><div class='line' id='LC15'><span class="cm"> *</span></div><div class='line' id='LC16'><span class="cm"> * Date: Tuesday, March 18th 2013</span></div><div class='line' id='LC17'><span class="cm"> */</span></div><div class='line' id='LC18'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">global</span><span class="p">,</span> <span class="nx">dom</span><span class="p">,</span> <span class="nx">browser</span><span class="p">,</span> <span class="nx">math</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">cancel</span><span class="p">,</span> <span class="nx">namespace</span><span class="p">,</span> <span class="nx">$</span><span class="p">,</span> <span class="nx">none</span><span class="p">){</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="c1">// We want to run this plug-in in strict-mode</span></div><div class='line' id='LC21'>	<span class="c1">// so that we may benefit from its optimizations</span></div><div class='line' id='LC22'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="c1">// The key used to bind-instance specific data to an object</span></div><div class='line' id='LC25'>	<span class="kd">var</span> <span class="nx">datakey</span> <span class="o">=</span> <span class="s1">&#39;overscroll&#39;</span><span class="p">;</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// create &lt;body&gt; node if there&#39;s not one present (e.g., for test runners)</span></div><div class='line' id='LC28'>	<span class="k">if</span> <span class="p">(</span><span class="nx">dom</span><span class="p">.</span><span class="nx">body</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="nx">dom</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span></div><div class='line' id='LC30'>			<span class="nx">dom</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">)</span></div><div class='line' id='LC31'>		<span class="p">);</span></div><div class='line' id='LC32'>	<span class="p">}</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="c1">// runs feature detection for overscroll</span></div><div class='line' id='LC35'>	<span class="kd">var</span> <span class="nx">compat</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="nx">animate</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC37'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="nx">global</span><span class="p">.</span><span class="nx">requestAnimationFrame</span>    <span class="o">||</span></div><div class='line' id='LC38'>				<span class="nx">global</span><span class="p">.</span><span class="nx">webkitRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC39'>				<span class="nx">global</span><span class="p">.</span><span class="nx">mozRequestAnimationFrame</span>    <span class="o">||</span></div><div class='line' id='LC40'>				<span class="nx">global</span><span class="p">.</span><span class="nx">oRequestAnimationFrame</span>      <span class="o">||</span></div><div class='line' id='LC41'>				<span class="nx">global</span><span class="p">.</span><span class="nx">msRequestAnimationFrame</span>     <span class="o">||</span></div><div class='line' id='LC42'>				<span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span> <span class="nx">wait</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="mi">1000</span><span class="o">/</span><span class="mi">60</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC43'>			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>				<span class="nx">fn</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">global</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC45'>			<span class="p">};</span></div><div class='line' id='LC46'>		<span class="p">})(),</span></div><div class='line' id='LC47'>		<span class="nx">overflowScrolling</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC48'>			<span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC49'>			<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nx">dom</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">prefixes</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;webkit&#39;</span><span class="p">,</span> <span class="s1">&#39;moz&#39;</span><span class="p">,</span> <span class="s1">&#39;o&#39;</span><span class="p">,</span> <span class="s1">&#39;ms&#39;</span><span class="p">];</span></div><div class='line' id='LC51'>			<span class="nx">dom</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC52'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">prefixes</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">prefix</span><span class="p">){</span></div><div class='line' id='LC53'>				<span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;OverflowScrolling&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;touch&#39;</span><span class="p">;</span></div><div class='line' id='LC54'>			<span class="p">});</span></div><div class='line' id='LC55'>			<span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflowScrolling</span> <span class="o">=</span> <span class="s1">&#39;touch&#39;</span><span class="p">;</span></div><div class='line' id='LC56'>			<span class="kd">var</span> <span class="nx">computedStyle</span> <span class="o">=</span> <span class="nx">global</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC57'>			<span class="k">if</span> <span class="p">(</span><span class="o">!!</span><span class="nx">computedStyle</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="nx">style</span> <span class="o">=</span> <span class="s1">&#39;overflow-scrolling&#39;</span><span class="p">;</span></div><div class='line' id='LC59'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC60'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">prefixes</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">prefix</span><span class="p">){</span></div><div class='line' id='LC61'>					<span class="k">if</span> <span class="p">(</span><span class="o">!!</span><span class="nx">computedStyle</span><span class="p">[</span><span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;OverflowScrolling&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC62'>						<span class="nx">style</span> <span class="o">=</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;-overflow-scrolling&#39;</span><span class="p">;</span></div><div class='line' id='LC63'>					<span class="p">}</span></div><div class='line' id='LC64'>					<span class="k">return</span> <span class="o">!</span><span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC65'>				<span class="p">});</span></div><div class='line' id='LC66'>			<span class="p">}</span></div><div class='line' id='LC67'>			<span class="nx">div</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC68'>			<span class="k">return</span> <span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC69'>		<span class="p">})(),</span></div><div class='line' id='LC70'>		<span class="nx">cursor</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC71'>			<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nx">dom</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC72'>			<span class="kd">var</span> <span class="nx">prefixes</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;webkit&#39;</span><span class="p">,</span> <span class="s1">&#39;moz&#39;</span><span class="p">];</span></div><div class='line' id='LC73'>			<span class="kd">var</span> <span class="nx">gmail</span> <span class="o">=</span> <span class="s1">&#39;https://mail.google.com/mail/images/2/&#39;</span><span class="p">;</span></div><div class='line' id='LC74'>			<span class="kd">var</span> <span class="nx">style</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">grab</span><span class="o">:</span>     <span class="s1">&#39;url(&#39;</span><span class="o">+</span><span class="nx">gmail</span><span class="o">+</span><span class="s1">&#39;openhand.cur), move&#39;</span><span class="p">,</span></div><div class='line' id='LC76'>				<span class="nx">grabbing</span><span class="o">:</span> <span class="s1">&#39;url(&#39;</span><span class="o">+</span><span class="nx">gmail</span><span class="o">+</span><span class="s1">&#39;closedhand.cur), move&#39;</span></div><div class='line' id='LC77'>			<span class="p">};</span></div><div class='line' id='LC78'>			<span class="nx">dom</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC79'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">prefixes</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">prefix</span><span class="p">){</span></div><div class='line' id='LC80'>				<span class="kd">var</span> <span class="nx">found</span><span class="p">,</span> <span class="nx">cursor</span> <span class="o">=</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;-grab&#39;</span><span class="p">;</span></div><div class='line' id='LC81'>				<span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cursor</span> <span class="o">=</span> <span class="nx">cursor</span><span class="p">;</span></div><div class='line' id='LC82'>				<span class="kd">var</span> <span class="nx">computedStyle</span> <span class="o">=</span> <span class="nx">global</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC83'>				<span class="nx">found</span> <span class="o">=</span> <span class="nx">computedStyle</span><span class="p">.</span><span class="nx">cursor</span> <span class="o">===</span> <span class="nx">cursor</span><span class="p">;</span></div><div class='line' id='LC84'>				<span class="k">if</span> <span class="p">(</span><span class="nx">found</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>					<span class="nx">style</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC86'>						<span class="nx">grab</span><span class="o">:</span>     <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;-grab&#39;</span><span class="p">,</span></div><div class='line' id='LC87'>						<span class="nx">grabbing</span><span class="o">:</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="s1">&#39;-grabbing&#39;</span></div><div class='line' id='LC88'>					<span class="p">};</span></div><div class='line' id='LC89'>				<span class="p">}</span></div><div class='line' id='LC90'>				<span class="k">return</span> <span class="o">!</span><span class="nx">found</span><span class="p">;</span></div><div class='line' id='LC91'>			<span class="p">});</span></div><div class='line' id='LC92'>			<span class="nx">div</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">div</span><span class="p">);</span></div><div class='line' id='LC93'>			<span class="k">return</span> <span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC94'>		<span class="p">})()</span></div><div class='line' id='LC95'>	<span class="p">};</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>	<span class="c1">// These are all the events that could possibly</span></div><div class='line' id='LC98'>	<span class="c1">// be used by the plug-in</span></div><div class='line' id='LC99'>	<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC100'>		<span class="nx">drag</span><span class="o">:</span>       <span class="s1">&#39;mousemove touchmove&#39;</span><span class="p">,</span></div><div class='line' id='LC101'>		<span class="nx">end</span><span class="o">:</span>        <span class="s1">&#39;mouseup mouseleave click touchend touchcancel&#39;</span><span class="p">,</span></div><div class='line' id='LC102'>		<span class="nx">hover</span><span class="o">:</span>      <span class="s1">&#39;mouseenter mouseleave&#39;</span><span class="p">,</span></div><div class='line' id='LC103'>		<span class="nx">ignored</span><span class="o">:</span>    <span class="s1">&#39;select dragstart drag&#39;</span><span class="p">,</span></div><div class='line' id='LC104'>		<span class="nx">scroll</span><span class="o">:</span>     <span class="s1">&#39;scroll&#39;</span><span class="p">,</span></div><div class='line' id='LC105'>		<span class="nx">start</span><span class="o">:</span>      <span class="s1">&#39;mousedown touchstart&#39;</span><span class="p">,</span></div><div class='line' id='LC106'>		<span class="nx">wheel</span><span class="o">:</span>      <span class="s1">&#39;mousewheel DOMMouseScroll&#39;</span></div><div class='line' id='LC107'>	<span class="p">};</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>	<span class="c1">// These settings are used to tweak drift settings</span></div><div class='line' id='LC110'>	<span class="c1">// for the plug-in</span></div><div class='line' id='LC111'>	<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC112'>		<span class="nx">captureThreshold</span><span class="o">:</span>   <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC113'>		<span class="nx">driftDecay</span><span class="o">:</span>         <span class="mf">1.1</span><span class="p">,</span></div><div class='line' id='LC114'>		<span class="nx">driftSequences</span><span class="o">:</span>     <span class="mi">22</span><span class="p">,</span></div><div class='line' id='LC115'>		<span class="nx">driftTimeout</span><span class="o">:</span>       <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC116'>		<span class="nx">scrollDelta</span><span class="o">:</span>        <span class="mi">15</span><span class="p">,</span></div><div class='line' id='LC117'>		<span class="nx">thumbOpacity</span><span class="o">:</span>       <span class="mf">0.7</span><span class="p">,</span></div><div class='line' id='LC118'>		<span class="nx">thumbThickness</span><span class="o">:</span>     <span class="mi">6</span><span class="p">,</span></div><div class='line' id='LC119'>		<span class="nx">thumbTimeout</span><span class="o">:</span>       <span class="mi">400</span><span class="p">,</span></div><div class='line' id='LC120'>		<span class="nx">wheelDelta</span><span class="o">:</span>         <span class="mi">20</span><span class="p">,</span></div><div class='line' id='LC121'>		<span class="nx">wheelTicks</span><span class="o">:</span>        <span class="mi">120</span></div><div class='line' id='LC122'>	<span class="p">};</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>	<span class="c1">// These defaults are used to complement any options</span></div><div class='line' id='LC125'>	<span class="c1">// passed into the plug-in entry point</span></div><div class='line' id='LC126'>	<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC127'>		<span class="nx">cancelOn</span><span class="o">:</span>       <span class="s1">&#39;select,input,textarea&#39;</span><span class="p">,</span></div><div class='line' id='LC128'>		<span class="nx">direction</span><span class="o">:</span>      <span class="s1">&#39;multi&#39;</span><span class="p">,</span></div><div class='line' id='LC129'>		<span class="nx">dragHold</span><span class="o">:</span>       <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC130'>		<span class="nx">hoverThumbs</span><span class="o">:</span>    <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC131'>		<span class="nx">scrollDelta</span><span class="o">:</span>    <span class="nx">settings</span><span class="p">.</span><span class="nx">scrollDelta</span><span class="p">,</span></div><div class='line' id='LC132'>		<span class="nx">showThumbs</span><span class="o">:</span>     <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC133'>		<span class="nx">persistThumbs</span><span class="o">:</span>  <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC134'>		<span class="nx">captureWheel</span><span class="o">:</span>   <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC135'>		<span class="nx">wheelDelta</span><span class="o">:</span>     <span class="nx">settings</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">,</span></div><div class='line' id='LC136'>		<span class="nx">wheelDirection</span><span class="o">:</span> <span class="s1">&#39;multi&#39;</span><span class="p">,</span></div><div class='line' id='LC137'>		<span class="nx">zIndex</span><span class="o">:</span>         <span class="mi">999</span></div><div class='line' id='LC138'>	<span class="p">};</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>	<span class="c1">// Triggers a DOM event on the overscrolled element.</span></div><div class='line' id='LC141'>	<span class="c1">// All events are namespaced under the overscroll name</span></div><div class='line' id='LC142'>	<span class="kd">function</span> <span class="nx">triggerEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>		<span class="nx">target</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;overscroll:&#39;</span> <span class="o">+</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC144'>	<span class="p">}</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>	<span class="c1">// Utility function to return a timestamp</span></div><div class='line' id='LC147'>	<span class="kd">function</span> <span class="nx">time</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC148'>		<span class="k">return</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC149'>	<span class="p">}</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>	<span class="c1">// Captures the position from an event, modifies the properties</span></div><div class='line' id='LC152'>	<span class="c1">// of the second argument to persist the position, and then</span></div><div class='line' id='LC153'>	<span class="c1">// returns the modified object</span></div><div class='line' id='LC154'>	<span class="kd">function</span> <span class="nx">capturePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>		<span class="nx">position</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC156'>		<span class="nx">position</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC157'>		<span class="nx">position</span><span class="p">.</span><span class="nx">time</span> <span class="o">=</span> <span class="nx">time</span><span class="p">();</span></div><div class='line' id='LC158'>		<span class="nx">position</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC159'>		<span class="k">return</span> <span class="nx">position</span><span class="p">;</span></div><div class='line' id='LC160'>	<span class="p">}</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>	<span class="c1">// Used to move the thumbs around an overscrolled element</span></div><div class='line' id='LC163'>	<span class="kd">function</span> <span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>		<span class="kd">var</span> <span class="nx">ml</span><span class="p">,</span> <span class="nx">mt</span><span class="p">;</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>		<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span> <span class="o">&amp;&amp;</span> <span class="nx">thumbs</span><span class="p">.</span><span class="nx">added</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC168'>			<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC169'>				<span class="nx">ml</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">);</span></div><div class='line' id='LC170'>				<span class="nx">mt</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC171'>				<span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;margin&#39;</span><span class="p">,</span> <span class="nx">mt</span> <span class="o">+</span> <span class="s1">&#39;px 0 0 &#39;</span> <span class="o">+</span> <span class="nx">ml</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC172'>			<span class="p">}</span></div><div class='line' id='LC173'>			<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>				<span class="nx">ml</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">+</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC175'>				<span class="nx">mt</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">);</span></div><div class='line' id='LC176'>				<span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;margin&#39;</span><span class="p">,</span> <span class="nx">mt</span> <span class="o">+</span> <span class="s1">&#39;px 0 0 &#39;</span> <span class="o">+</span> <span class="nx">ml</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></div><div class='line' id='LC177'>			<span class="p">}</span></div><div class='line' id='LC178'>		<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>	<span class="p">}</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>	<span class="c1">// Used to toggle the thumbs on and off</span></div><div class='line' id='LC183'>	<span class="c1">// of an overscrolled element</span></div><div class='line' id='LC184'>	<span class="kd">function</span> <span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">dragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>		<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span> <span class="o">&amp;&amp;</span> <span class="nx">thumbs</span><span class="p">.</span><span class="nx">added</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">persistThumbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>			<span class="k">if</span> <span class="p">(</span><span class="nx">dragging</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>					<span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span><span class="nx">fadeTo</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbOpacity</span><span class="p">);</span></div><div class='line' id='LC189'>				<span class="p">}</span></div><div class='line' id='LC190'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>					<span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span><span class="nx">fadeTo</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbOpacity</span><span class="p">);</span></div><div class='line' id='LC192'>				<span class="p">}</span></div><div class='line' id='LC193'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC194'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC195'>					<span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">.</span><span class="nx">fadeTo</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC196'>				<span class="p">}</span></div><div class='line' id='LC197'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>					<span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">.</span><span class="nx">fadeTo</span><span class="p">(</span><span class="s1">&#39;fast&#39;</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC199'>				<span class="p">}</span></div><div class='line' id='LC200'>			<span class="p">}</span></div><div class='line' id='LC201'>		<span class="p">}</span></div><div class='line' id='LC202'>	<span class="p">}</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>	<span class="c1">// Defers click event listeners to after a mouseup event.</span></div><div class='line' id='LC205'>	<span class="c1">// Used to avoid unintentional clicks</span></div><div class='line' id='LC206'>	<span class="kd">function</span> <span class="nx">deferClick</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC207'>		<span class="kd">var</span> <span class="nx">clicks</span><span class="p">,</span> <span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;events&#39;</span><span class="p">;</span></div><div class='line' id='LC208'>		<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">_data</span> <span class="o">?</span> <span class="nx">$</span><span class="p">.</span><span class="nx">_data</span><span class="p">(</span><span class="nx">target</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">key</span><span class="p">)</span> <span class="o">:</span> <span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC209'>		<span class="k">if</span> <span class="p">(</span><span class="nx">events</span> <span class="o">&amp;&amp;</span> <span class="nx">events</span><span class="p">.</span><span class="nx">click</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>			<span class="nx">clicks</span> <span class="o">=</span> <span class="nx">events</span><span class="p">.</span><span class="nx">click</span><span class="p">.</span><span class="nx">slice</span><span class="p">();</span></div><div class='line' id='LC211'>			<span class="nx">target</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">).</span><span class="nx">one</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC212'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">clicks</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">click</span><span class="p">){</span></div><div class='line' id='LC213'>					<span class="nx">target</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="nx">click</span><span class="p">);</span></div><div class='line' id='LC214'>				<span class="p">});</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC215'>			<span class="p">});</span></div><div class='line' id='LC216'>		<span class="p">}</span></div><div class='line' id='LC217'>	<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>	<span class="c1">// Toggles thumbs on hover. This event is only triggered</span></div><div class='line' id='LC220'>	<span class="c1">// if the hoverThumbs option is set</span></div><div class='line' id='LC221'>	<span class="kd">function</span> <span class="nx">hover</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC223'>		<span class="nx">thumbs</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC224'>		<span class="nx">options</span>  <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC225'>		<span class="nx">dragging</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;mouseenter&#39;</span><span class="p">;</span></div><div class='line' id='LC226'>		<span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">dragging</span><span class="p">);</span></div><div class='line' id='LC227'>	<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>	<span class="c1">// This function is only ever used when the overscrolled element</span></div><div class='line' id='LC230'>	<span class="c1">// scrolled outside of the scope of this plugin.</span></div><div class='line' id='LC231'>	<span class="kd">function</span> <span class="nx">scroll</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC233'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dragged</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>			<span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">sizing</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span></div><div class='line' id='LC235'>		<span class="p">}</span></div><div class='line' id='LC236'>	<span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>	<span class="c1">// handles mouse wheel scroll events</span></div><div class='line' id='LC239'>	<span class="kd">function</span> <span class="nx">wheel</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>		<span class="c1">// prevent any default wheel behavior</span></div><div class='line' id='LC242'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC245'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC246'>		<span class="nx">sizing</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">sizing</span><span class="p">,</span></div><div class='line' id='LC247'>		<span class="nx">thumbs</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC248'>		<span class="nx">dwheel</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">wheel</span><span class="p">,</span></div><div class='line' id='LC249'>		<span class="nx">flags</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">flags</span><span class="p">,</span></div><div class='line' id='LC250'>		<span class="nx">original</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">,</span></div><div class='line' id='LC251'>		<span class="nx">delta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">deltaX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>		<span class="c1">// stop any drifts</span></div><div class='line' id='LC254'>		<span class="nx">flags</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>		<span class="c1">// normalize the wheel ticks</span></div><div class='line' id='LC257'>		<span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">detail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>			<span class="nx">delta</span> <span class="o">=</span> <span class="o">-</span><span class="nx">original</span><span class="p">.</span><span class="nx">detail</span><span class="p">;</span></div><div class='line' id='LC259'>			<span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">detailX</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC260'>				<span class="nx">deltaX</span> <span class="o">=</span> <span class="o">-</span><span class="nx">original</span><span class="p">.</span><span class="nx">detailX</span><span class="p">;</span></div><div class='line' id='LC261'>			<span class="p">}</span></div><div class='line' id='LC262'>			<span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">detailY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>				<span class="nx">deltaY</span> <span class="o">=</span> <span class="o">-</span><span class="nx">original</span><span class="p">.</span><span class="nx">detailY</span><span class="p">;</span></div><div class='line' id='LC264'>			<span class="p">}</span></div><div class='line' id='LC265'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC266'>			<span class="nx">delta</span> <span class="o">=</span> <span class="nx">original</span><span class="p">.</span><span class="nx">wheelDelta</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">wheelTicks</span><span class="p">;</span></div><div class='line' id='LC267'>			<span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">wheelDeltaX</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'>				<span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">original</span><span class="p">.</span><span class="nx">wheelDeltaX</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">wheelTicks</span><span class="p">;</span></div><div class='line' id='LC269'>			<span class="p">}</span></div><div class='line' id='LC270'>			<span class="k">if</span> <span class="p">(</span><span class="nx">original</span><span class="p">.</span><span class="nx">wheelDeltaY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC271'>				<span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">original</span><span class="p">.</span><span class="nx">wheelDeltaY</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">wheelTicks</span><span class="p">;</span></div><div class='line' id='LC272'>			<span class="p">}</span></div><div class='line' id='LC273'>		<span class="p">}</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>		<span class="c1">// apply a pixel delta to each tick</span></div><div class='line' id='LC276'>		<span class="nx">delta</span>  <span class="o">*=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">;</span></div><div class='line' id='LC277'>		<span class="nx">deltaX</span> <span class="o">*=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">;</span></div><div class='line' id='LC278'>		<span class="nx">deltaY</span> <span class="o">*=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">;</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>		<span class="c1">// initialize flags if this is the first tick</span></div><div class='line' id='LC281'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">dwheel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>			<span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">).</span><span class="nx">dragging</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC283'>			<span class="nx">data</span><span class="p">.</span><span class="nx">wheel</span> <span class="o">=</span> <span class="nx">dwheel</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">timeout</span><span class="o">:</span> <span class="kc">null</span> <span class="p">};</span></div><div class='line' id='LC284'>			<span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC285'>		<span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>		<span class="c1">// actually modify scroll offsets</span></div><div class='line' id='LC288'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">wheelDirection</span> <span class="o">===</span> <span class="s1">&#39;vertical&#39;</span><span class="p">){</span></div><div class='line' id='LC289'>			<span class="k">this</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">-=</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC290'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wheelDirection</span> <span class="o">===</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>			<span class="k">this</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC292'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC293'>			<span class="k">this</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="nx">deltaX</span><span class="p">;</span></div><div class='line' id='LC294'>			<span class="k">this</span><span class="p">.</span><span class="nx">scrollTop</span>  <span class="o">-=</span> <span class="nx">deltaY</span> <span class="o">||</span> <span class="nx">delta</span><span class="p">;</span></div><div class='line' id='LC295'>		<span class="p">}</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>		<span class="k">if</span> <span class="p">(</span><span class="nx">dwheel</span><span class="p">.</span><span class="nx">timeout</span><span class="p">)</span> <span class="p">{</span> <span class="nx">cancel</span><span class="p">(</span><span class="nx">dwheel</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'>		<span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>		<span class="nx">dwheel</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="nx">wait</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC302'>			<span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">).</span><span class="nx">dragging</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC303'>			<span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">wheel</span> <span class="o">=</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC304'>		<span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbTimeout</span><span class="p">);</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>	<span class="p">}</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>	<span class="c1">// updates the current scroll offset during a mouse move</span></div><div class='line' id='LC309'>	<span class="kd">function</span> <span class="nx">drag</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC314'>		<span class="nx">touches</span>  <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">.</span><span class="nx">touches</span><span class="p">,</span></div><div class='line' id='LC315'>		<span class="nx">options</span>  <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC316'>		<span class="nx">sizing</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">sizing</span><span class="p">,</span></div><div class='line' id='LC317'>		<span class="nx">thumbs</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC318'>		<span class="nx">position</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">position</span><span class="p">,</span></div><div class='line' id='LC319'>		<span class="nx">flags</span>    <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">flags</span><span class="p">,</span></div><div class='line' id='LC320'>		<span class="nx">target</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>		<span class="c1">// correct page coordinates for touch devices</span></div><div class='line' id='LC324'>		<span class="k">if</span> <span class="p">(</span><span class="nx">touches</span> <span class="o">&amp;&amp;</span> <span class="nx">touches</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>			<span class="nx">event</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC326'>		<span class="p">}</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dragged</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>			<span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC330'>		<span class="p">}</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>		<span class="nx">flags</span><span class="p">.</span><span class="nx">dragged</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC333'><br/></div><div class='line' id='LC334'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;vertical&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC335'>			<span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">position</span><span class="p">.</span><span class="nx">x</span><span class="p">);</span></div><div class='line' id='LC336'>		<span class="p">}</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>			<span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">-=</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">position</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC340'>		<span class="p">}</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>		<span class="nx">capturePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">position</span><span class="p">);</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>		<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">data</span><span class="p">.</span><span class="nx">capture</span><span class="p">.</span><span class="nx">index</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>			<span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">).</span><span class="nx">dragging</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC346'>			<span class="nx">capturePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">capture</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">captureThreshold</span><span class="p">);</span></div><div class='line' id='LC347'>		<span class="p">}</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>		<span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'>	<span class="p">}</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>	<span class="c1">// sends the overscrolled element into a drift</span></div><div class='line' id='LC354'>	<span class="kd">function</span> <span class="nx">drift</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>		<span class="kd">var</span> <span class="nx">data</span>   <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">dx</span><span class="p">,</span> <span class="nx">dy</span><span class="p">,</span> <span class="nx">xMod</span><span class="p">,</span> <span class="nx">yMod</span><span class="p">,</span></div><div class='line' id='LC357'>		<span class="nx">capture</span>    <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">capture</span><span class="p">,</span></div><div class='line' id='LC358'>		<span class="nx">options</span>    <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC359'>		<span class="nx">sizing</span>     <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">sizing</span><span class="p">,</span></div><div class='line' id='LC360'>		<span class="nx">thumbs</span>     <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC361'>		<span class="nx">elapsed</span>    <span class="o">=</span> <span class="nx">time</span><span class="p">()</span> <span class="o">-</span> <span class="nx">capture</span><span class="p">.</span><span class="nx">time</span><span class="p">,</span></div><div class='line' id='LC362'>		<span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span></div><div class='line' id='LC363'>		<span class="nx">scrollTop</span>  <span class="o">=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span></div><div class='line' id='LC364'>		<span class="nx">decay</span>      <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">driftDecay</span><span class="p">;</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>		<span class="c1">// only drift if enough time has passed since</span></div><div class='line' id='LC367'>		<span class="c1">// the last capture event</span></div><div class='line' id='LC368'>		<span class="k">if</span> <span class="p">(</span><span class="nx">elapsed</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">driftTimeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>			<span class="nx">callback</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC370'>		<span class="p">}</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>		<span class="c1">// determine offset between last capture and current time</span></div><div class='line' id='LC373'>		<span class="nx">dx</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scrollDelta</span> <span class="o">*</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">capture</span><span class="p">.</span><span class="nx">x</span><span class="p">);</span></div><div class='line' id='LC374'>		<span class="nx">dy</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scrollDelta</span> <span class="o">*</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">capture</span><span class="p">.</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>		<span class="c1">// update target scroll offsets</span></div><div class='line' id='LC377'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;vertical&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC378'>			<span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="nx">dx</span><span class="p">;</span></div><div class='line' id='LC379'>		<span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>			<span class="nx">scrollTop</span> <span class="o">-=</span> <span class="nx">dy</span><span class="p">;</span></div><div class='line' id='LC381'>		<span class="p">}</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>		<span class="c1">// split the distance to travel into a set of sequences</span></div><div class='line' id='LC384'>		<span class="nx">xMod</span> <span class="o">=</span> <span class="nx">dx</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">driftSequences</span><span class="p">;</span></div><div class='line' id='LC385'>		<span class="nx">yMod</span> <span class="o">=</span> <span class="nx">dy</span> <span class="o">/</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">driftSequences</span><span class="p">;</span></div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>		<span class="nx">triggerEvent</span><span class="p">(</span><span class="s1">&#39;driftstart&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>		<span class="nx">data</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>		<span class="c1">// animate the drift sequence</span></div><div class='line' id='LC392'>		<span class="nx">compat</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="kd">function</span> <span class="nx">render</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC393'>			<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">drifting</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC394'>				<span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">max</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC395'>				<span class="nx">data</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC396'>				<span class="k">if</span> <span class="p">(</span><span class="nx">yMod</span> <span class="o">&gt;</span> <span class="nx">min</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">&gt;</span> <span class="nx">scrollTop</span> <span class="o">||</span> <span class="nx">yMod</span> <span class="o">&lt;</span> <span class="nx">max</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">&lt;</span> <span class="nx">scrollTop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>					<span class="nx">data</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC398'>					<span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">-=</span> <span class="nx">yMod</span><span class="p">;</span></div><div class='line' id='LC399'>					<span class="nx">yMod</span> <span class="o">/=</span> <span class="nx">decay</span><span class="p">;</span></div><div class='line' id='LC400'>				<span class="p">}</span></div><div class='line' id='LC401'>				<span class="k">if</span> <span class="p">(</span><span class="nx">xMod</span> <span class="o">&gt;</span> <span class="nx">min</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">&gt;</span> <span class="nx">scrollLeft</span> <span class="o">||</span> <span class="nx">xMod</span> <span class="o">&lt;</span> <span class="nx">max</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">&lt;</span> <span class="nx">scrollLeft</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>					<span class="nx">data</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC403'>					<span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">-=</span> <span class="nx">xMod</span><span class="p">;</span></div><div class='line' id='LC404'>					<span class="nx">xMod</span> <span class="o">/=</span> <span class="nx">decay</span><span class="p">;</span></div><div class='line' id='LC405'>				<span class="p">}</span></div><div class='line' id='LC406'>				<span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span></div><div class='line' id='LC407'>				<span class="nx">compat</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="nx">render</span><span class="p">);</span></div><div class='line' id='LC408'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC409'>				<span class="nx">triggerEvent</span><span class="p">(</span><span class="s1">&#39;driftend&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC410'>				<span class="nx">callback</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC411'>			<span class="p">}</span></div><div class='line' id='LC412'>		<span class="p">});</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'>	<span class="p">}</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>	<span class="c1">// starts the drag operation and binds the mouse move handler</span></div><div class='line' id='LC417'>	<span class="kd">function</span> <span class="nx">start</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC420'>		<span class="nx">touches</span>  <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">.</span><span class="nx">touches</span><span class="p">,</span></div><div class='line' id='LC421'>		<span class="nx">target</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC422'>		<span class="nx">dstart</span>   <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">),</span></div><div class='line' id='LC423'>		<span class="nx">flags</span>    <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">flags</span><span class="p">;</span></div><div class='line' id='LC424'><br/></div><div class='line' id='LC425'>		<span class="c1">// stop any drifts</span></div><div class='line' id='LC426'>		<span class="nx">flags</span><span class="p">.</span><span class="nx">drifting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC427'><br/></div><div class='line' id='LC428'>		<span class="c1">// only start drag if the user has not explictly banned it.</span></div><div class='line' id='LC429'>		<span class="k">if</span> <span class="p">(</span><span class="nx">dstart</span><span class="p">.</span><span class="nx">size</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">dstart</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">cancelOn</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC430'><br/></div><div class='line' id='LC431'>			<span class="c1">// without this the simple &quot;click&quot; event won&#39;t be recognized on touch clients</span></div><div class='line' id='LC432'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touches</span><span class="p">)</span> <span class="p">{</span> <span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC435'>				<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;cursor&#39;</span><span class="p">,</span> <span class="nx">compat</span><span class="p">.</span><span class="nx">cursor</span><span class="p">.</span><span class="nx">grabbing</span><span class="p">);</span></div><div class='line' id='LC436'>				<span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">).</span><span class="nx">dragging</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">dragged</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'>				<span class="c1">// apply the drag listeners to the doc or target</span></div><div class='line' id='LC439'>				<span class="k">if</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">dragHold</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC440'>					<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">drag</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">drag</span><span class="p">);</span></div><div class='line' id='LC441'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC442'>					<span class="nx">target</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">drag</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">drag</span><span class="p">);</span></div><div class='line' id='LC443'>				<span class="p">}</span></div><div class='line' id='LC444'>			<span class="p">}</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>			<span class="nx">data</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="nx">capturePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="p">{});</span></div><div class='line' id='LC447'>			<span class="nx">data</span><span class="p">.</span><span class="nx">capture</span> <span class="o">=</span> <span class="nx">capturePosition</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">captureThreshold</span><span class="p">);</span></div><div class='line' id='LC448'>			<span class="nx">triggerEvent</span><span class="p">(</span><span class="s1">&#39;dragstart&#39;</span><span class="p">,</span> <span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>		<span class="p">}</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>	<span class="p">}</span></div><div class='line' id='LC453'><br/></div><div class='line' id='LC454'>	<span class="c1">// ends the drag operation and unbinds the mouse move handler</span></div><div class='line' id='LC455'>	<span class="kd">function</span> <span class="nx">stop</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC458'>		<span class="nx">target</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC459'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC460'>		<span class="nx">flags</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">flags</span><span class="p">,</span></div><div class='line' id='LC461'>		<span class="nx">thumbs</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>		<span class="c1">// hides the thumbs after the animation is done</span></div><div class='line' id='LC464'>		<span class="nx">done</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC465'>			<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">hoverThumbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC466'>				<span class="nx">toggleThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC467'>			<span class="p">}</span></div><div class='line' id='LC468'>		<span class="p">};</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>		<span class="c1">// remove drag listeners from doc or target</span></div><div class='line' id='LC471'>		<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">dragHold</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC472'>			<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">drag</span><span class="p">,</span> <span class="nx">drag</span><span class="p">);</span></div><div class='line' id='LC473'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC474'>			<span class="nx">target</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">drag</span><span class="p">,</span> <span class="nx">drag</span><span class="p">);</span></div><div class='line' id='LC475'>		<span class="p">}</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>		<span class="c1">// only fire events and drift if we started with a</span></div><div class='line' id='LC478'>		<span class="c1">// valid position</span></div><div class='line' id='LC479'>		<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">position</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>			<span class="nx">triggerEvent</span><span class="p">(</span><span class="s1">&#39;dragend&#39;</span><span class="p">,</span> <span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC482'><br/></div><div class='line' id='LC483'>			<span class="c1">// only drift if a drag passed our threshold</span></div><div class='line' id='LC484'>			<span class="k">if</span> <span class="p">(</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC485'>				<span class="nx">drift</span><span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">done</span><span class="p">);</span></div><div class='line' id='LC486'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC487'>				<span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC488'>			<span class="p">}</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>		<span class="p">}</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>		<span class="c1">// only if we moved, and the mouse down is the same as</span></div><div class='line' id='LC493'>		<span class="c1">// the mouse up target do we defer the event</span></div><div class='line' id='LC494'>		<span class="k">if</span> <span class="p">(</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">start</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC495'>			<span class="nx">deferClick</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">start</span><span class="p">);</span></div><div class='line' id='LC496'>		<span class="p">}</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'>		<span class="c1">// clear all internal flags and settings</span></div><div class='line' id='LC499'>		<span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">).</span><span class="nx">dragging</span> <span class="o">=</span></div><div class='line' id='LC500'>			<span class="nx">data</span><span class="p">.</span><span class="nx">start</span>     <span class="o">=</span></div><div class='line' id='LC501'>			<span class="nx">data</span><span class="p">.</span><span class="nx">capture</span>   <span class="o">=</span></div><div class='line' id='LC502'>			<span class="nx">data</span><span class="p">.</span><span class="nx">position</span>  <span class="o">=</span></div><div class='line' id='LC503'>			<span class="nx">flags</span><span class="p">.</span><span class="nx">dragged</span>  <span class="o">=</span></div><div class='line' id='LC504'>			<span class="nx">flags</span><span class="p">.</span><span class="nx">dragging</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC505'><br/></div><div class='line' id='LC506'>		<span class="c1">// set the cursor back to normal</span></div><div class='line' id='LC507'>		<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;cursor&#39;</span><span class="p">,</span> <span class="nx">compat</span><span class="p">.</span><span class="nx">cursor</span><span class="p">.</span><span class="nx">grab</span><span class="p">);</span></div><div class='line' id='LC508'><br/></div><div class='line' id='LC509'>	<span class="p">}</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>	<span class="c1">// Ensures that a full set of options are provided</span></div><div class='line' id='LC512'>	<span class="c1">// for the plug-in. Also does some validation</span></div><div class='line' id='LC513'>	<span class="kd">function</span> <span class="nx">getOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>		<span class="c1">// fill in missing values with defaults</span></div><div class='line' id='LC516'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'>		<span class="c1">// check for inconsistent directional restrictions</span></div><div class='line' id='LC519'>		<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;multi&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="nx">options</span><span class="p">.</span><span class="nx">wheelDirection</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC520'>			<span class="nx">options</span><span class="p">.</span><span class="nx">wheelDirection</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">;</span></div><div class='line' id='LC521'>		<span class="p">}</span></div><div class='line' id='LC522'><br/></div><div class='line' id='LC523'>		<span class="c1">// ensure positive values for deltas</span></div><div class='line' id='LC524'>		<span class="nx">options</span><span class="p">.</span><span class="nx">scrollDelta</span> <span class="o">=</span> <span class="nx">math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollDelta</span><span class="p">));</span></div><div class='line' id='LC525'>		<span class="nx">options</span><span class="p">.</span><span class="nx">wheelDelta</span>  <span class="o">=</span> <span class="nx">math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">wheelDelta</span><span class="p">));</span></div><div class='line' id='LC526'><br/></div><div class='line' id='LC527'>		<span class="c1">// fix values for scroll offset</span></div><div class='line' id='LC528'>		<span class="nx">options</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">===</span> <span class="nx">none</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">));</span></div><div class='line' id='LC529'>		<span class="nx">options</span><span class="p">.</span><span class="nx">scrollTop</span>  <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">scrollTop</span>  <span class="o">===</span> <span class="nx">none</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">));</span></div><div class='line' id='LC530'><br/></div><div class='line' id='LC531'>		<span class="k">return</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'>	<span class="p">}</span></div><div class='line' id='LC534'><br/></div><div class='line' id='LC535'>	<span class="c1">// Returns the sizing information (bounding box) for the</span></div><div class='line' id='LC536'>	<span class="c1">// target DOM element</span></div><div class='line' id='LC537'>	<span class="kd">function</span> <span class="nx">getSizing</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC538'><br/></div><div class='line' id='LC539'>		<span class="kd">var</span> <span class="nx">$target</span>  <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">),</span></div><div class='line' id='LC540'>		<span class="nx">width</span>        <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">width</span><span class="p">(),</span></div><div class='line' id='LC541'>		<span class="nx">height</span>       <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">height</span><span class="p">(),</span></div><div class='line' id='LC542'>		<span class="nx">scrollWidth</span>  <span class="o">=</span> <span class="nx">width</span> <span class="o">&gt;=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollWidth</span> <span class="o">?</span> <span class="nx">width</span> <span class="o">:</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">,</span></div><div class='line' id='LC543'>		<span class="nx">scrollHeight</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">&gt;=</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollHeight</span> <span class="o">?</span> <span class="nx">height</span> <span class="o">:</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">,</span></div><div class='line' id='LC544'>		<span class="nx">hasScroll</span>    <span class="o">=</span> <span class="nx">scrollWidth</span> <span class="o">&gt;</span> <span class="nx">width</span> <span class="o">||</span> <span class="nx">scrollHeight</span> <span class="o">&gt;</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC547'>			<span class="nx">valid</span><span class="o">:</span> <span class="nx">hasScroll</span><span class="p">,</span></div><div class='line' id='LC548'>			<span class="nx">container</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC549'>				<span class="nx">width</span><span class="o">:</span> <span class="nx">width</span><span class="p">,</span></div><div class='line' id='LC550'>				<span class="nx">height</span><span class="o">:</span> <span class="nx">height</span><span class="p">,</span></div><div class='line' id='LC551'>				<span class="nx">scrollWidth</span><span class="o">:</span> <span class="nx">scrollWidth</span><span class="p">,</span></div><div class='line' id='LC552'>				<span class="nx">scrollHeight</span><span class="o">:</span> <span class="nx">scrollHeight</span></div><div class='line' id='LC553'>			<span class="p">},</span></div><div class='line' id='LC554'>			<span class="nx">thumbs</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC555'>				<span class="nx">horizontal</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC556'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">width</span> <span class="o">*</span> <span class="nx">width</span> <span class="o">/</span> <span class="nx">scrollWidth</span><span class="p">,</span></div><div class='line' id='LC557'>					<span class="nx">height</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span><span class="p">,</span></div><div class='line' id='LC558'>					<span class="nx">corner</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC559'>					<span class="nx">left</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC560'>					<span class="nx">top</span><span class="o">:</span> <span class="nx">height</span> <span class="o">-</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span></div><div class='line' id='LC561'>				<span class="p">},</span></div><div class='line' id='LC562'>				<span class="nx">vertical</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC563'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span><span class="p">,</span></div><div class='line' id='LC564'>					<span class="nx">height</span><span class="o">:</span> <span class="nx">height</span> <span class="o">*</span> <span class="nx">height</span> <span class="o">/</span> <span class="nx">scrollHeight</span><span class="p">,</span></div><div class='line' id='LC565'>					<span class="nx">corner</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC566'>					<span class="nx">left</span><span class="o">:</span> <span class="nx">width</span> <span class="o">-</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbThickness</span><span class="p">,</span></div><div class='line' id='LC567'>					<span class="nx">top</span><span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC568'>				<span class="p">}</span></div><div class='line' id='LC569'>			<span class="p">}</span></div><div class='line' id='LC570'>		<span class="p">};</span></div><div class='line' id='LC571'><br/></div><div class='line' id='LC572'>	<span class="p">}</span></div><div class='line' id='LC573'><br/></div><div class='line' id='LC574'>	<span class="c1">// Attempts to get (or implicitly creates) the</span></div><div class='line' id='LC575'>	<span class="c1">// remover function for the target passed</span></div><div class='line' id='LC576'>	<span class="c1">// in as an argument</span></div><div class='line' id='LC577'>	<span class="kd">function</span> <span class="nx">getRemover</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">orCreate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>		<span class="kd">var</span> <span class="nx">$target</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">),</span> <span class="nx">thumbs</span><span class="p">,</span></div><div class='line' id='LC580'>		<span class="nx">data</span>        <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">)</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line' id='LC581'>		<span class="nx">style</span>       <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;style&#39;</span><span class="p">),</span></div><div class='line' id='LC582'>		<span class="nx">fallback</span>    <span class="o">=</span> <span class="nx">orCreate</span> <span class="o">?</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>			<span class="nx">data</span> <span class="o">=</span> <span class="nx">$target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">);</span></div><div class='line' id='LC585'>			<span class="nx">thumbs</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">;</span></div><div class='line' id='LC586'><br/></div><div class='line' id='LC587'>			<span class="c1">// restore original styles (if any)</span></div><div class='line' id='LC588'>			<span class="k">if</span> <span class="p">(</span><span class="nx">style</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC589'>				<span class="nx">$target</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;style&#39;</span><span class="p">,</span> <span class="nx">style</span><span class="p">);</span></div><div class='line' id='LC590'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC591'>				<span class="nx">$target</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;style&#39;</span><span class="p">);</span></div><div class='line' id='LC592'>			<span class="p">}</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'>			<span class="c1">// remove any created thumbs</span></div><div class='line' id='LC595'>			<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC596'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">)</span> <span class="p">{</span> <span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC597'>				<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">)</span>   <span class="p">{</span> <span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span>   <span class="p">}</span></div><div class='line' id='LC598'>			<span class="p">}</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>			<span class="c1">// remove any bound overscroll events and data</span></div><div class='line' id='LC601'>			<span class="nx">$target</span></div><div class='line' id='LC602'>				<span class="p">.</span><span class="nx">removeData</span><span class="p">(</span><span class="nx">datakey</span><span class="p">)</span></div><div class='line' id='LC603'>				<span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">wheel</span><span class="p">,</span>      <span class="nx">wheel</span><span class="p">)</span></div><div class='line' id='LC604'>				<span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span>      <span class="nx">start</span><span class="p">)</span></div><div class='line' id='LC605'>				<span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span>        <span class="nx">stop</span><span class="p">)</span></div><div class='line' id='LC606'>				<span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">ignored</span><span class="p">,</span>    <span class="nx">ignore</span><span class="p">);</span></div><div class='line' id='LC607'><br/></div><div class='line' id='LC608'>		<span class="p">}</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">remover</span><span class="p">)</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">remover</span> <span class="o">:</span> <span class="nx">fallback</span><span class="p">;</span></div><div class='line' id='LC611'><br/></div><div class='line' id='LC612'>	<span class="p">}</span></div><div class='line' id='LC613'><br/></div><div class='line' id='LC614'>	<span class="c1">// Genterates CSS specific to a particular thumb.</span></div><div class='line' id='LC615'>	<span class="c1">// It requires sizing data and options</span></div><div class='line' id='LC616'>	<span class="kd">function</span> <span class="nx">getThumbCss</span><span class="p">(</span><span class="nx">size</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC617'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC618'>			<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;absolute&#39;</span><span class="p">,</span></div><div class='line' id='LC619'>			<span class="nx">opacity</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">persistThumbs</span> <span class="o">?</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">thumbOpacity</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC620'>			<span class="s1">&#39;background-color&#39;</span><span class="o">:</span> <span class="s1">&#39;black&#39;</span><span class="p">,</span></div><div class='line' id='LC621'>			<span class="nx">width</span><span class="o">:</span> <span class="nx">size</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC622'>			<span class="nx">height</span><span class="o">:</span> <span class="nx">size</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC623'>			<span class="s1">&#39;border-radius&#39;</span><span class="o">:</span> <span class="nx">size</span><span class="p">.</span><span class="nx">corner</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC624'>			<span class="s1">&#39;margin&#39;</span><span class="o">:</span> <span class="nx">size</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="s1">&#39;px 0 0 &#39;</span> <span class="o">+</span> <span class="nx">size</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">,</span></div><div class='line' id='LC625'>			<span class="s1">&#39;z-index&#39;</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">zIndex</span></div><div class='line' id='LC626'>		<span class="p">};</span></div><div class='line' id='LC627'>	<span class="p">}</span></div><div class='line' id='LC628'><br/></div><div class='line' id='LC629'>	<span class="c1">// Creates the DOM elements used as &quot;thumbs&quot; within</span></div><div class='line' id='LC630'>	<span class="c1">// the target container.</span></div><div class='line' id='LC631'>	<span class="kd">function</span> <span class="nx">createThumbs</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>		<span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="s1">&#39;&lt;div/&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC634'>		<span class="nx">thumbs</span>  <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC635'>		<span class="nx">css</span>     <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'>		<span class="k">if</span> <span class="p">(</span><span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">scrollWidth</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;vertical&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC638'>			<span class="nx">css</span> <span class="o">=</span> <span class="nx">getThumbCss</span><span class="p">(</span><span class="nx">sizing</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC639'>			<span class="nx">thumbs</span><span class="p">.</span><span class="nx">horizontal</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">div</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="nx">css</span><span class="p">).</span><span class="nx">prependTo</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC640'>		<span class="p">}</span></div><div class='line' id='LC641'><br/></div><div class='line' id='LC642'>		<span class="k">if</span> <span class="p">(</span><span class="nx">sizing</span><span class="p">.</span><span class="nx">container</span><span class="p">.</span><span class="nx">scrollHeight</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">!==</span> <span class="s1">&#39;horizontal&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC643'>			<span class="nx">css</span> <span class="o">=</span> <span class="nx">getThumbCss</span><span class="p">(</span><span class="nx">sizing</span><span class="p">.</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC644'>			<span class="nx">thumbs</span><span class="p">.</span><span class="nx">vertical</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">div</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="nx">css</span><span class="p">).</span><span class="nx">prependTo</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC645'>		<span class="p">}</span></div><div class='line' id='LC646'><br/></div><div class='line' id='LC647'>		<span class="nx">thumbs</span><span class="p">.</span><span class="nx">added</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">css</span><span class="p">;</span></div><div class='line' id='LC648'><br/></div><div class='line' id='LC649'>		<span class="k">return</span> <span class="nx">thumbs</span><span class="p">;</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'>	<span class="p">}</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>	<span class="c1">// ignores events on the overscroll element</span></div><div class='line' id='LC654'>	<span class="kd">function</span> <span class="nx">ignore</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC655'>		<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC656'>	<span class="p">}</span></div><div class='line' id='LC657'><br/></div><div class='line' id='LC658'>	<span class="c1">// This function takes a jQuery element, some</span></div><div class='line' id='LC659'>	<span class="c1">// (optional) options, and sets up event metadata</span></div><div class='line' id='LC660'>	<span class="c1">// for each instance the plug-in affects</span></div><div class='line' id='LC661'>	<span class="kd">function</span> <span class="nx">setup</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'>		<span class="c1">// create initial data properties for this instance</span></div><div class='line' id='LC664'>		<span class="nx">options</span> <span class="o">=</span> <span class="nx">getOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC665'>		<span class="kd">var</span> <span class="nx">sizing</span> <span class="o">=</span> <span class="nx">getSizing</span><span class="p">(</span><span class="nx">target</span><span class="p">),</span></div><div class='line' id='LC666'>		<span class="nx">thumbs</span><span class="p">,</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC667'>			<span class="nx">options</span><span class="o">:</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">sizing</span><span class="o">:</span> <span class="nx">sizing</span><span class="p">,</span></div><div class='line' id='LC668'>			<span class="nx">flags</span><span class="o">:</span> <span class="p">{</span> <span class="nx">dragging</span><span class="o">:</span> <span class="kc">false</span> <span class="p">},</span></div><div class='line' id='LC669'>			<span class="nx">remover</span><span class="o">:</span> <span class="nx">getRemover</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC670'>		<span class="p">};</span></div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>		<span class="c1">// only apply handlers if the overscrolled element</span></div><div class='line' id='LC673'>		<span class="c1">// actually has an area to scroll</span></div><div class='line' id='LC674'>		<span class="k">if</span> <span class="p">(</span><span class="nx">sizing</span><span class="p">.</span><span class="nx">valid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC675'>			<span class="c1">// provide a circular-reference, enable events, and</span></div><div class='line' id='LC676'>			<span class="c1">// apply any required CSS</span></div><div class='line' id='LC677'>			<span class="nx">data</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">target</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC678'>				<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;relative&#39;</span><span class="p">,</span></div><div class='line' id='LC679'>				<span class="nx">cursor</span><span class="o">:</span> <span class="nx">compat</span><span class="p">.</span><span class="nx">cursor</span><span class="p">.</span><span class="nx">grab</span></div><div class='line' id='LC680'>			<span class="p">}).</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">start</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">start</span><span class="p">)</span></div><div class='line' id='LC681'>				<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">stop</span><span class="p">)</span></div><div class='line' id='LC682'>				<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">ignored</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">ignore</span><span class="p">);</span></div><div class='line' id='LC683'><br/></div><div class='line' id='LC684'>			<span class="c1">// apply the stop listeners for drag end</span></div><div class='line' id='LC685'>			<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">dragHold</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC686'>				<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">stop</span><span class="p">);</span></div><div class='line' id='LC687'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC688'>				<span class="nx">data</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">stop</span><span class="p">);</span></div><div class='line' id='LC689'>			<span class="p">}</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>			<span class="c1">// apply any user-provided scroll offsets</span></div><div class='line' id='LC692'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC693'>				<span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">);</span></div><div class='line' id='LC694'>			<span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC695'>				<span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">);</span></div><div class='line' id='LC696'>			<span class="p">}</span></div><div class='line' id='LC697'><br/></div><div class='line' id='LC698'>			<span class="c1">// use native oversroll, if it exists</span></div><div class='line' id='LC699'>			<span class="k">if</span> <span class="p">(</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC700'>				<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">,</span> <span class="s1">&#39;touch&#39;</span><span class="p">);</span></div><div class='line' id='LC701'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC702'>				<span class="nx">target</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">scroll</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">scroll</span><span class="p">);</span></div><div class='line' id='LC703'>			<span class="p">}</span></div><div class='line' id='LC704'><br/></div><div class='line' id='LC705'>			<span class="c1">// check to see if the user would like mousewheel support</span></div><div class='line' id='LC706'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">captureWheel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC707'>				<span class="nx">target</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">wheel</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">wheel</span><span class="p">);</span></div><div class='line' id='LC708'>			<span class="p">}</span></div><div class='line' id='LC709'><br/></div><div class='line' id='LC710'>			<span class="c1">// add thumbs and listeners (if we&#39;re showing them)</span></div><div class='line' id='LC711'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">showThumbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC712'>				<span class="k">if</span> <span class="p">(</span><span class="nx">compat</span><span class="p">.</span><span class="nx">overflowScrolling</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC713'>					<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;overflow&#39;</span><span class="p">,</span> <span class="s1">&#39;scroll&#39;</span><span class="p">);</span></div><div class='line' id='LC714'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC715'>					<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;overflow&#39;</span><span class="p">,</span> <span class="s1">&#39;hidden&#39;</span><span class="p">);</span></div><div class='line' id='LC716'>					<span class="nx">data</span><span class="p">.</span><span class="nx">thumbs</span> <span class="o">=</span> <span class="nx">thumbs</span> <span class="o">=</span> <span class="nx">createThumbs</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC717'>					<span class="k">if</span> <span class="p">(</span><span class="nx">thumbs</span><span class="p">.</span><span class="nx">added</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC718'>						<span class="nx">moveThumbs</span><span class="p">(</span><span class="nx">thumbs</span><span class="p">,</span> <span class="nx">sizing</span><span class="p">,</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">(),</span> <span class="nx">target</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">());</span></div><div class='line' id='LC719'>						<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">hoverThumbs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC720'>							<span class="nx">target</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">events</span><span class="p">.</span><span class="nx">hover</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">hover</span><span class="p">);</span></div><div class='line' id='LC721'>						<span class="p">}</span></div><div class='line' id='LC722'>					<span class="p">}</span></div><div class='line' id='LC723'>				<span class="p">}</span></div><div class='line' id='LC724'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC725'>				<span class="nx">target</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;overflow&#39;</span><span class="p">,</span> <span class="s1">&#39;hidden&#39;</span><span class="p">);</span></div><div class='line' id='LC726'>			<span class="p">}</span></div><div class='line' id='LC727'><br/></div><div class='line' id='LC728'>			<span class="nx">target</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">datakey</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC729'>		<span class="p">}</span></div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>	<span class="p">}</span></div><div class='line' id='LC732'><br/></div><div class='line' id='LC733'>	<span class="c1">// Removes any event listeners and other instance-specific</span></div><div class='line' id='LC734'>	<span class="c1">// data from the target. It attempts to leave the target</span></div><div class='line' id='LC735'>	<span class="c1">// at the state it found it.</span></div><div class='line' id='LC736'>	<span class="kd">function</span> <span class="nx">teardown</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC737'>		<span class="nx">getRemover</span><span class="p">(</span><span class="nx">target</span><span class="p">)();</span></div><div class='line' id='LC738'>	<span class="p">}</span></div><div class='line' id='LC739'><br/></div><div class='line' id='LC740'>	<span class="c1">// This is the entry-point for enabling the plug-in;</span></div><div class='line' id='LC741'>	<span class="c1">// You can find it&#39;s exposure point at the end</span></div><div class='line' id='LC742'>	<span class="c1">// of this closure</span></div><div class='line' id='LC743'>	<span class="kd">function</span> <span class="nx">overscroll</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC744'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">removeOverscroll</span><span class="p">().</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC745'>			<span class="nx">setup</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC746'>		<span class="p">});</span></div><div class='line' id='LC747'>	<span class="p">}</span></div><div class='line' id='LC748'><br/></div><div class='line' id='LC749'>	<span class="c1">// This is the entry-point for disabling the plug-in;</span></div><div class='line' id='LC750'>	<span class="c1">// You can find it&#39;s exposure point at the end</span></div><div class='line' id='LC751'>	<span class="c1">// of this closure</span></div><div class='line' id='LC752'>	<span class="kd">function</span> <span class="nx">removeOverscroll</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC753'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC754'>			<span class="nx">teardown</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC755'>		<span class="p">});</span></div><div class='line' id='LC756'>	<span class="p">}</span></div><div class='line' id='LC757'><br/></div><div class='line' id='LC758'>	<span class="c1">// Extend overscroll to expose settings to the user</span></div><div class='line' id='LC759'>	<span class="nx">overscroll</span><span class="p">.</span><span class="nx">settings</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">;</span></div><div class='line' id='LC760'><br/></div><div class='line' id='LC761'>	<span class="c1">// Extend jQuery&#39;s prototype to expose the plug-in.</span></div><div class='line' id='LC762'>	<span class="c1">// If the supports native overflowScrolling, overscroll will not</span></div><div class='line' id='LC763'>	<span class="c1">// attempt to override the browser&#39;s built in support</span></div><div class='line' id='LC764'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">namespace</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC765'>		<span class="nx">overscroll</span><span class="o">:</span>         <span class="nx">overscroll</span><span class="p">,</span></div><div class='line' id='LC766'>		<span class="nx">removeOverscroll</span><span class="o">:</span>   <span class="nx">removeOverscroll</span></div><div class='line' id='LC767'>	<span class="p">});</span></div><div class='line' id='LC768'><br/></div><div class='line' id='LC769'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="nx">navigator</span><span class="p">,</span> <span class="nb">Math</span><span class="p">,</span> <span class="nx">setTimeout</span><span class="p">,</span> <span class="nx">clearTimeout</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="https://github.com/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04852s from fe1.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/azoff/Overscroll/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04893' data-host='fe1'></span>
    
  </body>
</html>

