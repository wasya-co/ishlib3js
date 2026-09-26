#!/usr/bin/env ruby
require 'json'

BASE = "https://cdn.jsdelivr.net/gh/wasya-co/ishlib3js@0.3.0/public/vendor/models"

outs = {}
Dir.glob('./00*').each do |file|
  basename = File.basename(file)
  slug = basename.split.last
  height = "#{$1.to_i / 10.0}," if basename =~ / h(\d+)cm /
  height = "#{$1}," if basename =~ / h(\d+) /

  outs[slug] = {
    name: slug,
    height: height,
    path: "#{BASE}/#{file}/scene.glb"
  }
end

File.write('index.json', JSON.pretty_generate( outs ))
