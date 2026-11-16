#!/usr/bin/env ruby
require 'json'

MODELS_ROOT = "https://cdn.jsdelivr.net/gh/wasya-co/ishlib3js@v0.4.8/public/vendor/models"
opts = {
  'brunette' => { type: 'F' },
  'cara' => { type: 'F' },
  'eve' => { type: 'F' },

  'denis' => { type: 'M' },
  'gregor' => { type: 'M' },
}


outs = {}
opts.each do |name, vals|
  outs[name] = { type: vals[:type], url: "#{MODELS_ROOT}/avatars/#{name}/model.glb" }
end

File.write('index.json', JSON.pretty_generate( outs ))
