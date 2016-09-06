     for /r %%a in (*.json) do (
     echo ---- %%a before ----
     type "%%a"
     echo --------------------

     echo { > "%%a.tmp"
     echo   "_comment": "This Spec is for Phase 1!! Most updated version is at https://github.com/reTHINK-project/specs/tree/master/schemas", >> "%%a.tmp"
     more +1 "%%a" >> "%%a.tmp"
     del "%%a"
     move "%%a.tmp" "%%a"

     echo ---- %%a after ----
     type "%%a"
     echo --------------------
    )
