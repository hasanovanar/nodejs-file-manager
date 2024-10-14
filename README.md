# Notes

1. **Some commands will display Operation failed in C:\Users (if C:\ is system drive) folder in Windows. It is related to Windows security feature**

`cp somefile.txt C:\Users`

2. **Names of files or folders with spaces should be enclosed in double quotes**

`add "some file name with spaces.txt"`

3. `path_to_new_directory` in copying and moving files is presumed to be folder, not full file path

`cp somefile.txt D:\SomeFolder`
`mv otherfile.txt D:\OtherFolder`

4. **os options can be chained** <br>
   For example: <br>
   `os --cpus --homedir --username`

5. **Compress operation**

`compress path_to_file path_to_destination`

`path_to_destination` should include file name and extension. `.br` ending is added to destination path by function

Examples: <br>
`compress C:\originalFile.txt D:\compressedFile.txt`

6. **Decompress operation**

`decompress path_to_file path_to_destination`

`path_to_destination` should include file name and extension.

`decompress D:\compressedFile.txt.br C:\originalFile.txt`
