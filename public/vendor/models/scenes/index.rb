#!/usr/bin/env ruby
require 'json'

BASE = "https://cdn.jsdelivr.net/gh/wasya-co/ishlib3js@v0.4.4/public/vendor/models"

outs = {}
Dir.glob('./00*').each do |file|
  basename = File.basename(file)
  slug = basename.split.last
  height = nil
  if (match = basename.match(/ h(\d+)cm /))
    height = match[1].to_i / 10.0
  elsif (match = basename.match(/ h(\d+) /))
    height = match[1].to_i
  end

  outs[slug] = {
    name: slug,
    height: height,
    path: "#{BASE}/scenes/#{basename}"
  }
end

File.write('index.json', JSON.pretty_generate( outs ))
