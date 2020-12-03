<<<<<<< HEAD
# FakerRotatingDashboard
Fake Rotating Dashboard Script merupakan sebuah perintah yang dapat digunakan untuk melakukan pembuatan data dari file excel. Langkah Pembuatan :

<ol>
    <li>Install dependencies dengan cara <b>yarn install</b></li>
    <li>   
        Buatlah sebuah file .env<br/>
        APP_PORT={port aplikasi running}
        DBA_HOST={localhost}
        DBA_PORT={port database}
        DBA_USER={user database}
        DBA_PASSWORD={password database}
        DBA_SCHEMA={nama database}
    </li>
    <li>Buatlah sebuah folder uploads di dalam folder seeders</li>
    <li>Isikan folder uploads dengan file berformat .xlsx</li>
    <li>Buatlah sebuah database dengan nama test_rotating dengan cara yarn sequelize db:create --name test_rotating</li>
    <li>Lakukan migrasi database dengan perintah yarn sequelize db:migrate</li>
    <li>Lakukan proses seeding dengan perintah yarn sequelize db:seed:all</li>
</ol>
=======
# Faker Rotating Dashboard
Fake Rotating Dashboard Script merupakan sebuah perintah yang dapat digunakan untuk melakukan pembuatan data dari file excel.
Langkah Pembuatan :

>>>>>>> 75ebe7641d2b38266c2d68564911431294a5bd0c
