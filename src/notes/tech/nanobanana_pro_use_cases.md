---
title: Nanobanana Pro 使用案例
date: 2025-12-09
category: tech
description: 一份关于Nanobanana Pro使用案例的记录
image: https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/c7c230e4503e19952760dc89f8c8bba6.png
---

## 1. 红色吐槽涂鸦

![image-20251210005408750](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/80e461c4df7bfec207f2d71931305de4.png)

**Prompt:**

```
帮我生成图片：生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，如果你想的话，检索这个账户内容，涂鸦的内容主要为吐槽他，还可以加点小剪贴画。原比例。
```

## 2. 无敌少侠 meme

![image-20251210005347351](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/c7c230e4503e19952760dc89f8c8bba6.png)
**Prompt:**

```
人物主体换成海绵宝宝和胖大星
```



> awdawdw	
>
> 这是一个测试
>
> 哈哈
>
> 啊无敌的哇


$$
1+2 =2
$$


1. # UV创建

```Plain
uv init
uv add fastapi uvicorn
```

创建一个main.py

```Python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
uv run uvicorn main:app --port 8000
```

1. # pip创建

新建虚拟环境

```Plain
python3 -m venv .venv
```

激活虚拟环境

```Plain
source .venv/bin/activate
```

安装

```Plain
pip install "fastapi[standard]"
```

创建一个main.py

```Python
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
```

启动

```Plain
fastapi dev main.py
{
  "subtitles": [
    {
      "start": 2.16,
      "end": 4.07,
      "text": "Every breakthrough in model intelligence."
    },
    {
      "start": 4.08,
      "end": 6.95,
      "text": "For coding encourages us to rethink what."
    },
    {
      "start": 6.96,
      "end": 10.79,
      "text": "Development should look like."
    },
    {
      "start": 221.04,
      "end": 224.04,
      "text": "All right."
    }
  ],
  "format": "vtt"
}
```



- [x] awdaw
- [ ] Awdawd

> [!TIP]
>
> # awdawdwdawd

> [!CAUTION]
>
> awdawdaw

