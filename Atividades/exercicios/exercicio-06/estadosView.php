<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Lista de Estados</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

</head>

<body>

    <table class="table table-bordered table-hover">
        <thead class="thead table-dark">
            <tr>
                <th scope="col">ESTADOS</th>
            </tr>
        </thead>
        <tbody id="corpo">
            <?php
            while ($e = $estados->fetch()) {
                echo "<tr><td>" . $e["nome"] . "</td></tr>";
            }
            ?>
        </tbody>

    </table>

</body>

</html>