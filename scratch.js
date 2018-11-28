<ul class="nav navbar-nav navbar-right">
    <% if (!currentUser) { %>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Sign Up</a></li>
    <% } else { %>
    <li><a href="#">Signed In As <strong><%= currentUser.username %></strong></a></li>
    <li><a href="/logout">Logout</a></li>
    <% } %>
</ul>
