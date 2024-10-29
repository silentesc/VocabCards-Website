<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand"><router-link class="router-link-inactive" active-class=""
                    :to="{ name: 'HomeView' }">VocabCards</router-link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"><router-link class="router-link-inactive"
                                :to="{ name: 'CollectionsView' }">App</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link class="router-link-inactive"
                                :to="{ name: 'LoginView' }">Login</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link class="router-link-inactive"
                                :to="{ name: 'RegisterView' }">Register</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link class="router-link-inactive"
                                :to="{ name: 'AccountView' }">Account</router-link></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    height: 120px;
}

.navbar-brand {
    font-size: 1.8em;
}

.navbar-nav .nav-link {
    font-size: 1.5em;
}

.router-link-inactive {
    text-decoration: none;
    color: inherit;
}

.router-link-active {
    text-decoration: underline;
    color: #fff;
}
</style>
