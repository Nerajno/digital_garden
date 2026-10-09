# Warns at build time when a published note (feed: show) has no `type:` in its
# front matter. Such notes still render, on the "Other" shelf of /notes.
Jekyll::Hooks.register :site, :post_read do |site|
  types = (site.data["note_types"] || []).map { |t| t["id"] }
  site.collections["notes"]&.docs&.each do |doc|
    next unless doc.data["feed"] == "show"
    type = doc.data["type"]
    next if types.include?(type)
    Jekyll.logger.warn "Warning:", "notes index: #{doc.relative_path} has #{type ? "unknown type '#{type}'" : 'no type'} (shown under Other on /notes)"
  end
end
