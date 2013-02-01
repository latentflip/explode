# explode
`explode` (and `implode`) are command line utilities for creating and opening `.tar`, `.tar.gz`, `.tar.bz2` directories. 

Because life is too short for `tar -zxvfjwtf??!!`.

![tar](http://imgs.xkcd.com/comics/tar.png)

# Install
With [node.js](http://nodejs.org/) and [npm](http://github.com/isaacs/npm):

	npm install explode -g

You can now use `explode` and `implode` from the command line.


## Examples

### Explode

Extract foo.tar into ./foo
```
explode foo.tar
```

Extract foo.tar into ~/bar
```
explode foo.tar ~/bar
```

Extract foo.tar.gz
```
explode foo.tar.gz
```

Extract foo.tar.bz2 into ./bar
```
explode foo.tar.bz2 bar
```

### Implode

#### Implode creates tar files from directories, using the compression indicated by the filename.

Create a foo.tar from the bar directory

```
implode foo.tar bar
```

Create a foo.tar.gz from the bar directory

```
implode foo.tar.gz bar
```

Create a foo.tar.bz2 from the bar directory.
```
implode foo.tar.bz2 bar
```

#### Implode is forgiving

If you just want to tar a directory, this will do what you expect

```
implode bar #=> creates bar.tar
```

Getting the args the wrong way around works as you expect
```
implode foo bar.tar
```


## Thanks

To Heather Arthur for creating [replace](https://github.com/harthur/replace), on which this is based.

## License

http://en.wikipedia.org/wiki/WTFPL
