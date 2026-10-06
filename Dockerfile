FROM ruby:4.0.7-alpine

RUN apk add --no-cache build-base nodejs-current

RUN gem install bundler

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN bundle install

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]

EXPOSE 4000

