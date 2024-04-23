FROM jekyll/jekyll

COPY Gemfile /srv/jekyll

RUN chmod -R 777 /srv/jekyll

RUN bundle install

RUN bundle add webrick

RUN chmod -R 777 /srv/jekyll

EXPOSE 4000

CMD jekyll serve