'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-movie-app-angular-client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a68f336749a8df191a5cfd213be9705b36a08de67d7cd9c8902dcc6879304025ada20396cdcc6b41e0d6864f273a65d4a8c396465632bb06386aa1e42fa1037e"' : 'data-target="#xs-components-links-module-AppModule-a68f336749a8df191a5cfd213be9705b36a08de67d7cd9c8902dcc6879304025ada20396cdcc6b41e0d6864f273a65d4a8c396465632bb06386aa1e42fa1037e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a68f336749a8df191a5cfd213be9705b36a08de67d7cd9c8902dcc6879304025ada20396cdcc6b41e0d6864f273a65d4a8c396465632bb06386aa1e42fa1037e"' :
                                            'id="xs-components-links-module-AppModule-a68f336749a8df191a5cfd213be9705b36a08de67d7cd9c8902dcc6879304025ada20396cdcc6b41e0d6864f273a65d4a8c396465632bb06386aa1e42fa1037e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDirectorViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieDirectorViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieGenreViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieGenreViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieUserFavoriteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieUserFavoriteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegistrationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegistrationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FetchApiDataService.html" data-type="entity-link" >FetchApiDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoviecardService.html" data-type="entity-link" >MoviecardService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});