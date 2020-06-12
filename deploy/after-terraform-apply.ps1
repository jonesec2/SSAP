Write-Host "Setting location: C:\proj\SSAP\"
Set-Location "C:\proj\SSAP\client"

Write-Host "Build react app"
npm install
npm run build

Write-Host "Setting location: C:\proj\SSAP\"
Set-Location "C:\proj\SSAP\"

Write-Host "Copying error.html to react/build/"
Copy-Item -Path ".\deploy\error.html" -Destination ".\client\build\"

Write-Host "Get terraform state"
$state = (Get-Content .\deploy\terraform.tfstate | ConvertFrom-Json)

$site = $state.resources[0].instances[0].attributes

Write-Host ($site | ConvertTo-Json)

Write-Host "aws s3 sync .\client\build\ s3://$($site.bucket) --dryrun"
aws s3 sync .\client\build\ s3://$($site.bucket)
