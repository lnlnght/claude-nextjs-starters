버전/제목 : $ARGUMENTS

마지막 태그 이후(태그가 없으면 첫 커밋 이후) 변경사항을 정리해 CHANGELOG 항목을 작성해주세요:

1. `git describe --tags --abbrev=0` 로 마지막 태그를 확인하세요. 태그가 없으면 저장소의 첫 커밋부터 확인합니다.
2. 해당 지점부터 `HEAD`까지의 `git log`와 필요하면 `git diff`를 확인해 변경 내역을 파악하세요.
3. 커밋들을 Added / Changed / Fixed / Removed 같은 [Keep a Changelog](https://keepachangelog.com) 스타일 카테고리로 분류해 요약하세요.
4. 저장소 루트에 `CHANGELOG.md`가 있으면 최상단에 새 섹션을 추가하고, 없으면 새로 생성하세요. 섹션 제목은 `$ARGUMENTS`가 있으면 그 버전/제목을 사용하고, 없으면 날짜 기반 제목(예: `## Unreleased`)을 사용하세요.
5. 작업이 끝나면 어떤 커밋 범위를 기준으로 정리했는지, 어떤 파일을 수정했는지 간단히 요약해 보고하세요.
