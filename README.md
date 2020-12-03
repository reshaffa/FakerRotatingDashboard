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
    <li>Buatlah sebuah database dengan nama test_rotating dengan cara yarn sequelize db:create --name test_rotating</li>
    <li>Lakukan migrasi database dengan perintah yarn sequelize db:migrate</li>
    <li>Lakukan proses seeding dengan perintah yarn sequelize db:seed:all</li>
</ol>
