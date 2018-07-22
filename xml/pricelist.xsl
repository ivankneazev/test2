<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html>
		<body>
			<p>
			<xsl:apply-templates select="priceList/header"/>
			</p>
			<p>
			<xsl:apply-templates select="priceList/description"/>
			</p>
		</body>
	</html>
</xsl:template>

<xsl:template match="priceList">
	<div>
		<xsl:value-of select="chapter"/>
		
	</div>
</xsl:template>

</xsl:stylesheet>