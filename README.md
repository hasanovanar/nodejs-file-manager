# Notes

1. **Names of files or folders with spaces should be enclosed in double quotes**

`add "some file name with spaces.txt"`

2. **os options can be chained** <br>
   For example: <br>
   `os --cpus --homedir --username`

3. **Compress and decompress operations**

`compress path_to_file path_to_destination`

`decompress path_to_file path_to_destination`

`path_to_destination` should include file name and extension

Examples: <br>
`compress C:\originalFile.txt D:\compressedFile.txt`

`decompress D:\compressedFile.txt.br C:\originalFile.txt`
