# FakerRotatingDashboard
Fake Rotating Dashboard Script merupakan sebuah perintah yang dapat digunakan untuk melakukan pembuatan data dari file excel. Langkah Pembuatan :

<ol>
    <li>Install dependencies dengan cara <b>yarn install</b></li>
    <li>   
        Buatlah sebuah file .env<br/>
        APP_PORT={port aplikasi running}<br/>
        DBA_HOST={localhost}<br/>
        DBA_PORT={port database}<br/>
        DBA_USER={user database}<br/>
        DBA_PASSWORD={password database}<br/>
        DBA_SCHEMA={nama database}<br/>
    </li>
    <li>Buatlah sebuah folder uploads di dalam folder seeders</li>
    <li>Isikan folder uploads dengan file berformat .xlsx</li>
    <li>Buatlah sebuah database dengan nama test_rotating dengan cara <b>yarn sequelize db:create --name test_rotating</b></li>
    <li>Lakukan migrasi database dengan perintah <b>yarn sequelize db:migrate</b></li>
    <li>Lakukan proses seeding dengan perintah <b>yarn sequelize db:seed:all</b></li>
</ol>
